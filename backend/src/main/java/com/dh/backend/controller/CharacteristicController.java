package com.dh.backend.controller;

import com.dh.backend.dto.CharacteristicDTO;
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


    @PostMapping()
    public ResponseEntity<CharacteristicDTO> createCharacteristic(@RequestBody CharacteristicDTO characteristicDTO) {
        return ResponseEntity.ok(characteristicService.createCharacteristic(characteristicDTO));
    }

    @GetMapping("/{id}")
    public CharacteristicDTO readCharacteristic(@PathVariable Long id) {
        return characteristicService.readCharacteristic(id);
    }

    @PutMapping()
    public ResponseEntity<CharacteristicDTO> updateCharacteristic(@RequestBody CharacteristicDTO characteristicDTO) {
        return ResponseEntity.ok(characteristicService.updateCharacteristic(characteristicDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCharacteristic(@PathVariable Long id) {
        characteristicService.deleteCharacteristic(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/")
    public Set<CharacteristicDTO> getListCategories() {
        return characteristicService.getListCharacteristic();
    }
}
