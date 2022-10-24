package com.dh.backend.service;

import com.dh.backend.dto.CategoryDTO;
import com.dh.backend.model.Category;
import com.dh.backend.repository.ICategoryRepository;
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
public class CategoryService {

    @Autowired
    private ICategoryRepository categoryRepository;

    @Autowired
    ObjectMapper mapper;

    //MÉTODO CRUD MÁS LISTAR CATEGORÍAS
    //CREA UNA CATEGORÍA
    public Category createCategory(Category category) {
        if (this.findCategoryByTitle(category.getTitle()) != null)
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Esta categoría ya existe");
        return categoryRepository.save(category);
    }
    //BUSCA UNA CATEGORÍA POR ID
    public CategoryDTO readCategory(Long id) {
        if (categoryRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "No existe el categoría con id: " + id);
        Optional<Category> category = categoryRepository.findById(id);
        return mapper.convertValue(category, CategoryDTO.class);
    }

    //MODIFICA LA CATEGORÍA
    public Category updateCategory(Category category) {
        if (categoryRepository.findById(category.getId()).isEmpty())
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "No existe la categoría que quieres modificar");
        return categoryRepository.save(category);
    }

    //ELIMINA LA CATEGORÍA
    public void deleteCategory(Long id) {
        if (categoryRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "No existe la categoría con id: " + id);
        categoryRepository.deleteById(id);
    }

    //LISTA LAS CATEGORÍAS
    public Set<CategoryDTO> getListCategory() {
        List<Category> categories = categoryRepository.findAll();
        Set<CategoryDTO> categoriesDTO = new HashSet<>();
        for (Category category: categories) {
            categoriesDTO.add(mapper.convertValue(category, CategoryDTO.class));
        }
        return categoriesDTO;
    }

    //MÉTODOS A PARTIR DE QUERIES
    //BUSCA UNA CATEGORÍA POR TÍTULO
    public Category findCategoryByTitle(String title) {
        return categoryRepository.findCategoryByTitle(title);
    }
}
