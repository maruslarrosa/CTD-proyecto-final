package com.dh.backend.service;

import com.dh.backend.dto.CityDTO;
import com.dh.backend.model.City;
import com.dh.backend.repository.ICityRepository;
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
public class CityService {
    @Autowired
    private ICityRepository cityRepository;

    @Autowired
    ObjectMapper mapper;


    /**
     * Métodos CRUD completos + Método listar
     */

    /**
     * Crear
     * @param cityDTO
     * @return Graba en BBDD y retorna un DTO
     */
    public CityDTO createCity(CityDTO cityDTO) {
        City city = mapper.convertValue(cityDTO, City.class);
        if (this.findCityByName(city.getName()) != null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Este ciudad ya existe");

        return mapper.convertValue(cityRepository.save(city), CityDTO.class);
    }

    /**
     * Buscar por id
     * @param id
     * @return Retorna el DTO que corresponde a ese ID
     */
    public CityDTO readCity(Long id) {
        if (cityRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la ciudad con el id: " + id);

        Optional<City> city = cityRepository.findById(id);
        return mapper.convertValue(city, CityDTO.class);
    }

    /**
     * Modificar
     * @param cityDTO
     * @return Graba cambios en BBDD y retorna el DTO
     */
    public CityDTO updateCity(CityDTO cityDTO) {
        City city = mapper.convertValue(cityDTO, City.class);
        if (cityRepository.findById(city.getId()).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la ciudad que quieres modificar");

        return mapper.convertValue(cityRepository.save(city), CityDTO.class);
    }

    /**
     * Eliminar
     * @param id Elimina según id
     */
    public void deleteCity(Long id) {
        if (cityRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la ciudad con el id: " + id);

        cityRepository.deleteById(id);
    }

    /**
     * Listar
     * @return Retorna listado completo de entidades
     */
    public Set<CityDTO> getListCity() {
        List<City> categories = cityRepository.findAll();
        Set<CityDTO> categoriesDTO = new HashSet<>();
        for (City city: categories) {
            categoriesDTO.add(mapper.convertValue(city, CityDTO.class));
        }

        return categoriesDTO;
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
