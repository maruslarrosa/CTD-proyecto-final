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


    /**
     * Métodos CRUD completo + Método listar
     */

    /**
     * Crear
     * @param categoryDTO
     * @return Graba en BBDD y retorna un DTO
     */
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = mapper.convertValue(categoryDTO, Category.class);
        if (this.findCategoryByName(category.getName()) != null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esta categoría ya existe");

        return mapper.convertValue(categoryRepository.save(category), CategoryDTO.class);
    }

    /**
     * Buscar por id
     * @param id
     * @return Retorna el DTO que corresponde a ese ID
     */
    public CategoryDTO readCategory(Long id) {
        if (categoryRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la categoría con id: " + id);

        Optional<Category> category = categoryRepository.findById(id);
        return mapper.convertValue(category, CategoryDTO.class);
    }

    /**
     * Modificar
     * @param categoryDTO
     * @return Graba cambios en BBDD y retorna el DTO
     */
    public CategoryDTO updateCategory(CategoryDTO categoryDTO) {
        Category category = mapper.convertValue(categoryDTO, Category.class);
        if (categoryRepository.findById(category.getId()).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la categoría que quieres modificar");

        return mapper.convertValue(categoryRepository.save(category), CategoryDTO.class);
    }

    /**
     * Eliminar
     * @param id Elimina según id
     */
    public void deleteCategory(Long id) {
        if (categoryRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe la categoría con id: " + id);

        categoryRepository.deleteById(id);
    }

    /**
     * Listar
     * @return Retorna listado completo de entidades
     */
    public Set<CategoryDTO> getListCategory() {
        List<Category> categories = categoryRepository.findAll();
        Set<CategoryDTO> categoriesDTO = new HashSet<>();
        for (Category category: categories) {
            categoriesDTO.add(mapper.convertValue(category, CategoryDTO.class));
        }

        return categoriesDTO;
    }

    /**
     * Método a partir de Query
     * @param name Busca entidad por nombre
     * @return Retorna entidad
     */
    public Category findCategoryByName(String name) {
        return categoryRepository.findCategoryByName(name);
    }
}
