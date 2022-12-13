package com.dh.backend.controller;

import com.dh.backend.dto.CategoryDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/categorias")
public class CategoryController {

    @Autowired
    CategoryService categoryService;


    // ADMIN
    @PostMapping()
    public ResponseEntity<CategoryDTO> createCategory(@RequestBody CategoryDTO categoryDTO) throws BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.createCategory(categoryDTO));
    }

    // ALL
    @GetMapping("/{id}")
    public CategoryDTO readCategory(@PathVariable Long id) throws BadRequestException {
        return categoryService.readCategory(id);
    }

    // ADMIN
    @PutMapping
    public ResponseEntity<CategoryDTO> updateCategory(@RequestBody CategoryDTO categoryDTO) throws BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(categoryService.updateCategory(categoryDTO));
    }

    // ADMIN
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCategory(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // ALL
    @GetMapping
    public Set<CategoryDTO> getListCategories() {
        return categoryService.getListCategory();
    }
}
