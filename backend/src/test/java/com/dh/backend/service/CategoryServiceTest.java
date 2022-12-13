package com.dh.backend.service;

import com.dh.backend.dto.CategoryDTO;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoryServiceTest {

    @Autowired
    CategoryService categoryService;

    CategoryDTO categoryDTOTest;

    @BeforeEach
    void init() {
        categoryDTOTest = new CategoryDTO("Hoteles",
                "Descripción de prueba",
                "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    }

    @Test
    @Order(1)
    @DisplayName("Category Record -> Category")
    void createCategory() throws Exception {
        CategoryDTO categoryDTO = categoryService.createCategory(categoryDTOTest);
        Assertions.assertNotNull(categoryService.readCategory(categoryDTO.getId()));
    }

    @Test
    @Order(2)
    @DisplayName("Category Search -> Category")
    void updateCategory() throws Exception {
        CategoryDTO categoryDTO = categoryService.createCategory(categoryDTOTest);
        CategoryDTO categoryOriginal = categoryService.readCategory(categoryDTO.getId());
        categoryDTO.setName("Hostels");
        CategoryDTO categoryUpdate = categoryService.updateCategory(categoryDTO);
        assertNotEquals(categoryUpdate, categoryOriginal);
    }

    /*@Test
    @Order(3)
    @DisplayName("Category Delete -> Category")
    public void deleteCategory() {
        CategoryDTO categoryDTO = categoryService.createCategory(categoryDTOTest);
        assertNotNull(categoryService.readCategory(categoryDTO.getId()));
        categoryService.deleteCategory(1L);
        Assert.assertTrue(categoryService.readCategory(1L).isEmpty());
    }*/

    /*public void test03EliminarPaciente() throws Exception {
        PacienteDto p = pacienteService.crear(paciente);
        assertNotNull(pacienteService.buscarPorId(p.getId()));
        pacienteService.eliminar(p.getId());
        assertThrows(ResourceNotFoundException.class, () -> pacienteService.buscarPorId(p.getId()));
    }

    @Test
    @Order(3)
    @DisplayName("Categories List -> Category")
    void getListCategory() {
        Set<CategoryDTO> categories = categoryService.getListCategory();
        Assert.assertTrue( !categories.isEmpty() );
        Assert.assertTrue( categories.size() == 1 );
    }


    */
}
