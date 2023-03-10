package com.dh.backend.controller;

import com.dh.backend.dto.CharacteristicDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.service.CharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/caracteristicas")
public class CharacteristicController {
    @Autowired
    CharacteristicService characteristicService;


    // ADMIN
    @PostMapping()
    public ResponseEntity<CharacteristicDTO> createCharacteristic(@RequestBody CharacteristicDTO characteristicDTO) throws BadRequestException {
        return ResponseEntity.ok(characteristicService.createCharacteristic(characteristicDTO));
    }

    // ALL
    @GetMapping("/{id}")
    public CharacteristicDTO readCharacteristic(@PathVariable Long id) throws BadRequestException {
        return characteristicService.readCharacteristic(id);
    }

    // ADMIN
    @PutMapping
    public ResponseEntity<CharacteristicDTO> updateCharacteristic(@RequestBody CharacteristicDTO characteristicDTO) throws BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(characteristicService.updateCharacteristic(characteristicDTO));
    }

    // ADMIN
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCharacteristic(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        characteristicService.deleteCharacteristic(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // ALL
    @GetMapping
    public Set<CharacteristicDTO> getListCategories() {
        return characteristicService.getListCharacteristic();
    }
}
