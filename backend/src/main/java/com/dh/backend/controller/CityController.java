package com.dh.backend.controller;

import com.dh.backend.dto.CityDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/ciudades")
public class CityController {

    @Autowired
    CityService cityService;

    // ADMIN
    @PostMapping()
    public ResponseEntity<CityDTO> createCity(@RequestBody CityDTO cityDTO) throws BadRequestException {
        return ResponseEntity.ok(cityService.createCity(cityDTO));
    }

    // ALL
    @GetMapping("/{id}")
    public CityDTO readCity(@PathVariable Long id) throws BadRequestException{
        return cityService.readCity(id);
    }

    // ADMIN
    @PutMapping()
    public ResponseEntity<CityDTO> updateCity(@RequestBody CityDTO cityDTO) throws BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(cityService.updateCity(cityDTO));
    }

    // ADMIN
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCity(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException{
        cityService.deleteCity(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // ALL
    @GetMapping
    public Set<CityDTO> getListCategories() {
        return cityService.getListCity();
    }
}
