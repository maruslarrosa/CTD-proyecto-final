package com.dh.backend.service;

import com.dh.backend.dto.CategoryDTO;
import com.dh.backend.model.Category;
import org.junit.jupiter.api.*;
import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Set;

<<<<<<< HEAD
@SpringBootTest
=======
/*@SpringBootTest
>>>>>>> c4e1ced1b1da590fb4e94f7e37a222c401d8e372
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoryServiceTest {

    @Autowired
    CategoryService categoryService;

    Category categoryTest;

    @BeforeEach
    void init() {
        categoryTest = new Category("Hoteles", "Descripción de prueba", "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    }

    @Test
    @Order(1)
    @DisplayName("Category Record -> Category")
    void createCategory() {
        Category category = categoryService.createCategory(categoryTest);
        Assertions.assertNotNull(category);
        Assertions.assertNotNull(category.getId());
    }

    @Test
    @Order(2)
    @DisplayName("Category Search -> Category")
    void readCategory() {
        CategoryDTO categoryDTO = categoryService.readCategory(1L);
        Assertions.assertNotNull(categoryDTO);
        Assertions.assertNotNull(categoryDTO.getId());
        Assertions.assertTrue(categoryDTO instanceof CategoryDTO);
    }

    @Test
    @Order(3)
    @DisplayName("Categories List -> Category")
    void getListCategory() {
        Set<CategoryDTO> categories = categoryService.getListCategory();
        Assert.assertTrue( !categories.isEmpty() );
        Assert.assertTrue( categories.size() == 1 );
    }



//    @Test
//    @Order(4)
//    @DisplayName("Category Delete -> Category")
//    public void deleteCategory() {
//        categoryService.deleteCategory(1L);
//        Assert.assertTrue(categoryService.readCategory(1L).isEmpty());
//    }
<<<<<<< HEAD
}
=======
}*/
>>>>>>> c4e1ced1b1da590fb4e94f7e37a222c401d8e372
