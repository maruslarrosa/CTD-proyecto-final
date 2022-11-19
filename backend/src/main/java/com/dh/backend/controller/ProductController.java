package com.dh.backend.controller;

import com.dh.backend.dto.ProductDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.model.Product;
import com.dh.backend.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/productos")
public class ProductController {
    @Autowired
    ProductService productService;

    @Autowired
    ObjectMapper mapper;


    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) throws Exception {
        return ResponseEntity.ok(productService.createProduct(productDTO));
    }

    @GetMapping("/{id}")
    public ProductDTO readProduct(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        return productService.readProduct(id);
    }

    @PutMapping
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody ProductDTO productDTO) throws BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(productService.updateProduct(productDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        productService.deleteProduct(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Set<ProductDTO> getListProducts() {
        return productService.getListProduct();
    }

    // lista de productos según ciudad
    @GetMapping("/ciudades/{id}")
    public ResponseEntity<List<ProductDTO>> findProductsByCity(@PathVariable(name = "id") Long id)  throws BadRequestException {
        List<ProductDTO> productsDTO = productService.findProductsByCity(id);
        return ResponseEntity.ok(productsDTO);
    }

    // Lista de productos según categoría
    @GetMapping("/categorias/{id}")
    public ResponseEntity<List<ProductDTO>> findProductsByCategory(@PathVariable(name = "id") Long id)  throws BadRequestException {
        List<ProductDTO> productsDTO = productService.findProductsByCategory(id);
        return ResponseEntity.ok(productsDTO);
    }

    // lista de productos Random
    @GetMapping("/random")
    public ResponseEntity<List<ProductDTO>> getProductsRandom() {
        List<ProductDTO> productsDTO = productService.getProductsRandom();
        return ResponseEntity.ok(productsDTO);
    }

}


