package com.dh.backend.service;

import com.dh.backend.dto.CharacteristicDTO;
import com.dh.backend.model.Characteristic;
import com.dh.backend.repository.ICharacteristicRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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


    /**
     * Métodos CRUD completos + Método listar
     */

    /**
     * Crear
     * @param characteristicDTO
     * @return Graba en BBDD y retorna un DTO
     */
    public CharacteristicDTO createCharacteristic(CharacteristicDTO characteristicDTO) {
        Characteristic characteristic = mapper.convertValue(characteristicDTO, Characteristic.class);
        if (this.findCharacteristicByName(characteristic.getName()) != null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Este característica ya existe");

        return mapper.convertValue(characteristicRepository.save(characteristic), CharacteristicDTO.class);
    }

    /**
     * Buscar por id
     * @param id
     * @return Retorna el DTO que corresponde a ese ID
     */
    public CharacteristicDTO readCharacteristic(Long id) {
        if (characteristicRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la característica con el id: " + id);

        Optional<Characteristic> characteristic = characteristicRepository.findById(id);
        return mapper.convertValue(characteristic, CharacteristicDTO.class);
    }

    /**
     * Modificar
     * @param characteristicDTO
     * @return Graba cambios en BBDD y retorna el DTO
     */
    public CharacteristicDTO updateCharacteristic(CharacteristicDTO characteristicDTO) {
        Characteristic characteristic = mapper.convertValue(characteristicDTO, Characteristic.class);
        if (characteristicRepository.findById(characteristic.getId()).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la característica que quieres modificar");

        return mapper.convertValue(characteristicRepository.save(characteristic), CharacteristicDTO.class);
    }

    /**
     * Eliminar
     * @param id Elimina según id
     */
    public void deleteCharacteristic(Long id) {
        if (characteristicRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la característica con el id: " + id);

        characteristicRepository.deleteById(id);
    }

    /**
     * Listar
     * @return Retorna listado completo de entidades
     */
    public Set<CharacteristicDTO> getListCharacteristic() {
        List<Characteristic> characteristics = characteristicRepository.findAll();
        Set<CharacteristicDTO> characteristicDTO = new HashSet<>();
        for (Characteristic characteristic: characteristics) {
            characteristicDTO.add(mapper.convertValue(characteristic, CharacteristicDTO.class));
        }

        return characteristicDTO;
    }

    /**.
     * Método a partir de Query
     * @param name Busca entidad por nombre
     * @return Retorna entidad
     */
    public Characteristic findCharacteristicByName(String name) {
        return characteristicRepository.findCharacteristicByName(name);
    }

}
