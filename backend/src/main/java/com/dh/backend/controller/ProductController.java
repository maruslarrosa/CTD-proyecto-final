package com.dh.backend.controller;

import com.dh.backend.dto.AvailabilityRequestDTO;
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

    // ADMIN
    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) throws Exception {
        return ResponseEntity.ok(productService.createProduct(productDTO));
    }

    // ALL
    @GetMapping("/{id}")
    public ProductDTO readProduct(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        return productService.readProduct(id);
    }

    // ADMIN
    @PutMapping
    public ResponseEntity<ProductDTO> updateProduct(@RequestBody ProductDTO productDTO) throws BadRequestException, ResourceNotFoundException {
        return ResponseEntity.ok(productService.updateProduct(productDTO));
    }

    // ADMIN
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable Long id) throws BadRequestException, ResourceNotFoundException {
        productService.deleteProduct(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // ALL
    @GetMapping
    public Set<ProductDTO> getListProducts() {
        return productService.getListProduct();
    }

    // ALL
    // lista de productos según ciudad
    @GetMapping("/ciudades/{id}")
    public ResponseEntity<List<ProductDTO>> findProductsByCity(@PathVariable(name = "id") Long id)  throws BadRequestException {
        List<ProductDTO> productsDTO = productService.findProductsByCity(id);
        return ResponseEntity.ok(productsDTO);
    }

    // ALL
    // Lista de productos según categoría
    @GetMapping("/categorias/{id}")
    public ResponseEntity<List<ProductDTO>> findProductsByCategory(@PathVariable(name = "id") Long id)  throws BadRequestException {
        List<ProductDTO> productsDTO = productService.findProductsByCategory(id);
        return ResponseEntity.ok(productsDTO);
    }

    // ALL
    // lista de productos Random
    @GetMapping("/random")
    public ResponseEntity<List<ProductDTO>> getProductsRandom() {
        List<ProductDTO> productsDTO = productService.getProductsRandom();
        return ResponseEntity.ok(productsDTO);
    }

    @PostMapping("/busqueda-por-fecha-y-ciudad")
    public ResponseEntity<List<ProductDTO>> findAvailableProductsByCityAndDate(@RequestBody AvailabilityRequestDTO availabilityRequestDTO) {
        List<ProductDTO> productsDTO = new ArrayList<>();
        List<Product> products = productService.findAvailableProductsByCityAndDate(availabilityRequestDTO);
        for (Product product: products) {
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return ResponseEntity.ok(productsDTO);
    }

    @PostMapping("/busqueda-por-fecha")
    public ResponseEntity<List<ProductDTO>> findAvailableProductsByDate(@RequestBody AvailabilityRequestDTO availabilityRequestDTO) {
        List<ProductDTO> productsDTO = new ArrayList<>();
        List<Product> products = productService.findAvailableProductsByDate(availabilityRequestDTO);
        for (Product product: products) {
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return ResponseEntity.ok(productsDTO);
    }
}


