package com.dh.backend.service;

import com.dh.backend.dto.CharacteristicDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.model.Characteristic;
import com.dh.backend.repository.ICharacteristicRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CharacteristicService {
    @Autowired
    private ICharacteristicRepository characteristicRepository;

    @Autowired
    ObjectMapper mapper;

    private static final Logger logger = Logger.getLogger(CharacteristicService.class);


    public CharacteristicDTO createCharacteristic(CharacteristicDTO characteristicDTO) throws BadRequestException {
        if(characteristicDTO.getName().isEmpty() || characteristicDTO == null)
            throw new BadRequestException("La característica no puede ser null");
        Characteristic characteristic = mapper.convertValue(characteristicDTO, Characteristic.class);
        if (this.findCharacteristicByName(characteristic.getName()) != null)
            throw new BadRequestException("Esta categoría ya existe");

        logger.info("Característica creada exitosamente");
        return mapper.convertValue(characteristicRepository.save(characteristic), CharacteristicDTO.class);
    }

    public CharacteristicDTO readCharacteristic(Long id) throws BadRequestException {
        if(id== null | id < 1)
            throw new BadRequestException("El id de la característica no puede ser null ni negativo");
        if (characteristicRepository.findById(id).isEmpty())
            throw new BadRequestException("No existe la característica con el id: " + id);

        Optional<Characteristic> characteristic = characteristicRepository.findById(id);
        logger.info("Se encontró la característica " + characteristic.get().getName());
        return mapper.convertValue(characteristic, CharacteristicDTO.class);
    }

    public CharacteristicDTO updateCharacteristic(CharacteristicDTO characteristicDTO) throws BadRequestException, ResourceNotFoundException {
        if (characteristicDTO == null )
            throw new BadRequestException("la característica no puede ser null");
        if (characteristicDTO.getId() == null)
            throw new BadRequestException("el id de característica no puede ser null");
        Characteristic characteristic = mapper.convertValue(characteristicDTO, Characteristic.class);
        if (characteristicRepository.findById(characteristic.getId()).isEmpty())
            throw new ResourceNotFoundException("No existe la característica que quieres modificar");
        logger.info("Característica modificada exitosamente");
        return mapper.convertValue(characteristicRepository.save(characteristic), CharacteristicDTO.class);
    }

    public void deleteCharacteristic(Long id) throws BadRequestException, ResourceNotFoundException {
        if( id == null || id < 1 )
            throw new BadRequestException("El id de la característica no puede ser null ni negativo");
        if (characteristicRepository.findById(id).isEmpty())
            throw new ResourceNotFoundException("No existe la característica con el id: " + id);
        logger.info("Característica eliminada exitosamente");
        characteristicRepository.deleteById(id);
    }

    public Set<CharacteristicDTO> getListCharacteristic() {
        List<Characteristic> characteristics = characteristicRepository.findAll();
        Set<CharacteristicDTO> characteristicDTO = new HashSet<>();
        for (Characteristic characteristic: characteristics) {
            characteristicDTO.add(mapper.convertValue(characteristic, CharacteristicDTO.class));
        }

        return characteristicDTO;
    }

    public Characteristic findCharacteristicByName(String name) throws BadRequestException {
        if (name == null)
            throw new BadRequestException("El nombre no puede ser null");
        return characteristicRepository.findCharacteristicByName(name);
    }
}
