package com.dh.backend.controller;

import com.dh.backend.dto.ImageDTO;
import com.dh.backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/imagenes")
public class ImageController {
    @Autowired
    ImageService imageService;



    @GetMapping("/{id}")
    public ImageDTO readImage(@PathVariable Long id) {
        return imageService.readImage(id);
    }

    @PutMapping()
    public ResponseEntity<ImageDTO> updateImage(@RequestBody ImageDTO imageDTO) {
        return ResponseEntity.ok(imageService.updateImage(imageDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteImage(@PathVariable Long id) {
        imageService.deleteImage(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/")
    public Set<ImageDTO> getListCategories() {
        return imageService.getListImage();
    }
}
