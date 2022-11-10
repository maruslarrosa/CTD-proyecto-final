package com.dh.backend.controller;

import com.dh.backend.dto.CityDTO;
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


    @PostMapping()
    public ResponseEntity<CityDTO> createCity(@RequestBody CityDTO cityDTO) {
        return ResponseEntity.ok(cityService.createCity(cityDTO));
    }

    @GetMapping("/{id}")
    public CityDTO readCity(@PathVariable Long id) {
        return cityService.readCity(id);
    }

    @PutMapping()
    public ResponseEntity<CityDTO> updateCity(@RequestBody CityDTO cityDTO) {
        return ResponseEntity.ok(cityService.updateCity(cityDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCity(@PathVariable Long id) {
        cityService.deleteCity(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/")
    public Set<CityDTO> getListCategories() {
        return cityService.getListCity();
    }

}
