package com.dh.backend.service;

import com.dh.backend.dto.CategoryDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.model.Category;
import com.dh.backend.repository.ICategoryRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    private static final Logger logger = Logger.getLogger(CategoryService.class);

    /**
     * Métodos CRUD completo + Método listar
     */

    /**
     * Crear
     * @param categoryDTO
     * @return Graba en BBDD y retorna un DTO
     */
    public CategoryDTO createCategory(CategoryDTO categoryDTO) throws BadRequestException {
        if(categoryDTO.getName().isEmpty() || categoryDTO == null)
            throw new BadRequestException("La categoria no puede ser null");
        Category category = mapper.convertValue(categoryDTO, Category.class);
        if (this.findCategoryByName(category.getName()) != null)
            throw new BadRequestException("Esta categoría ya existe");

        logger.info("Categoria creada exitosamente");
        return mapper.convertValue(categoryRepository.save(category), CategoryDTO.class);
    }

    /**
     * Buscar por id
     * @param id
     * @return Retorna el DTO que corresponde a ese ID
     */
    public CategoryDTO readCategory(Long id) throws BadRequestException{
        if(id == null | id < 1)
            throw new BadRequestException("El id de la categoría no puede ser null ni negativo");
        if (categoryRepository.findById(id).isEmpty())
            throw new BadRequestException("No existe la categoría con id: " + id);
        Optional<Category> category = categoryRepository.findById(id);
        logger.info("Se encontró la categoría " + category.get().getName());
        return mapper.convertValue(category, CategoryDTO.class);
    }

    /**
     * Modificar
     * @param categoryDTO
     * @return Graba cambios en BBDD y retorna el DTO
     */
    public CategoryDTO updateCategory(CategoryDTO categoryDTO) throws BadRequestException, ResourceNotFoundException {
        if (categoryDTO == null )
            throw new BadRequestException("la categoría no puede ser null");
        if (categoryDTO.getId() == null)
            throw new BadRequestException("el id de categoría no puede ser null");
        Category category = mapper.convertValue(categoryDTO, Category.class);
        if (categoryRepository.findById(category.getId()).isEmpty())
            throw new ResourceNotFoundException("No existe la categoría que quieres modificar");
        logger.info("Categoria modificada exitosamente");
        return mapper.convertValue(categoryRepository.save(category), CategoryDTO.class);
    }

    /**
     * Eliminar
     * @param id Elimina según id
     */
    public void deleteCategory(Long id) throws BadRequestException, ResourceNotFoundException {
        if( id == null || id < 1 )
            throw new BadRequestException("El id de la categoría no puede ser null ni negativo");
        if (categoryRepository.findById(id).isEmpty())
            throw new ResourceNotFoundException("No existe la categoría con id: " + id);
        logger.info("Categoría eliminada exitosamente");
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
        logger.info("acceso a Lista de categorías");
        return categoriesDTO;
    }

    /**
     * Método a partir de Query
     * @param name Busca entidad por nombre
     * @return Retorna entidad
     */
    public Category findCategoryByName(String name) throws BadRequestException {
        if (name == null)
            throw new BadRequestException("El nombre no puede ser null");
        return categoryRepository.findCategoryByName(name);
    }
}
