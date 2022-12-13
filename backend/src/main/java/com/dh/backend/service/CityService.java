package com.dh.backend.service;

import com.dh.backend.dto.CityDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.model.City;
import com.dh.backend.repository.ICityRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CityService {
    @Autowired
    private ICityRepository cityRepository;

    @Autowired
    ObjectMapper mapper;

    private static final Logger logger = Logger.getLogger(CityService.class);


    /**
     * Métodos CRUD completos + Método listar
     */

    /**
     * Crear
     * @param cityDTO
     * @return Graba en BBDD y retorna un DTO
     */
    public CityDTO createCity(CityDTO cityDTO) throws BadRequestException {
        if(cityDTO.getName().isEmpty() || cityDTO == null)
            throw new BadRequestException("La ciudad no puede ser null");
        City city = mapper.convertValue(cityDTO, City.class);
        if (this.findCityByName(city.getName()) != null)
            throw new BadRequestException("Esta categoría ya existe");

        logger.info("Categoria creada exitosamente");
        return mapper.convertValue(cityRepository.save(city), CityDTO.class);
    }

    /**
     * Buscar por id
     * @param id
     * @return Retorna el DTO que corresponde a ese ID
     */
    public CityDTO readCity(Long id) throws BadRequestException {
        if(id == null | id < 1)
            throw new BadRequestException("El id de la ciudad no puede ser null ni negativo");
        if (cityRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la ciudad con el id: " + id);

        Optional<City> city = cityRepository.findById(id);
        logger.info("Se encontró la categoría " + city.get().getName());
        return mapper.convertValue(city, CityDTO.class);
    }

    /**
     * Modificar
     * @param cityDTO
     * @return Graba cambios en BBDD y retorna el DTO
     */
    public CityDTO updateCity(CityDTO cityDTO) throws BadRequestException, ResourceNotFoundException {
        if (cityDTO == null )
            throw new BadRequestException("la ciudad no puede ser null");
        if (cityDTO.getId() == null)
            throw new BadRequestException("el id de la ciudad no puede ser null");
        City city = mapper.convertValue(cityDTO, City.class);
        if (cityRepository.findById(city.getId()).isEmpty())
            throw new ResourceNotFoundException("No existe la ciudad que quieres modificar");
        logger.info("Ciudad modificada exitosamente");
        return mapper.convertValue(cityRepository.save(city), CityDTO.class);
    }

    /**
     * Eliminar
     * @param id Elimina según id
     */
    public void deleteCity(Long id) throws BadRequestException, ResourceNotFoundException {
        if( id == null || id < 1 )
            throw new BadRequestException("El id de la ciudad no puede ser null ni negativo");
        if (cityRepository.findById(id).isEmpty())
            throw new ResourceNotFoundException("No existe la ciudad con id: " + id);
        logger.info("Ciudad eliminada exitosamente");
        cityRepository.deleteById(id);
    }

    /**
     * Listar
     * @return Retorna listado completo de entidades
     */
    public Set<CityDTO> getListCity() {
        List<City> cities = cityRepository.findAll();
        Set<CityDTO> citiesDTO = new HashSet<>();
        for (City city: cities) {
            citiesDTO.add(mapper.convertValue(city, CityDTO.class));
        }

        return citiesDTO;
    }

    public CityDTO findCityById(Long id) {
        City city = cityRepository.findById(id).orElse(null);
        return mapper.convertValue(city, CityDTO.class);
    }

    /**.
     * Método a partir de Query
     * @param name Busca entidad por nombre
     * @return Retorna entidad
     */
    public City findCityByName(String name) {
        return cityRepository.findCityByName(name);
    }


}

