package com.dh.backend.controller;

import com.dh.backend.dto.CategoryDTO;
import com.dh.backend.model.Category;
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

    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.createCategory(category));
    }

    @GetMapping("/{id}")
    public CategoryDTO readCategory(@PathVariable Long id) {
        return categoryService.readCategory(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/")
    public Set<CategoryDTO> getListCategories() {
        return categoryService.getListCategory();
    }

    @PutMapping
    public ResponseEntity<Category> updateCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.updateCategory(category));
    }
}
