package com.dh.backend.service;

import com.dh.backend.dto.ProductDTO;
import com.dh.backend.model.Product;
import com.dh.backend.repository.IProductRepository;
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
public class ProductService {
    @Autowired
    private IProductRepository productRepository;

    @Autowired
    ObjectMapper mapper;


    /**
     * Métodos CRUD completos + Método listar
     */

    /**
     * Crear
     * @param productDTO
     * @return Graba en BBDD y retorna un DTO
     */
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        if (this.findProductByName(product.getName()) != null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Este producto ya existe");

        return mapper.convertValue(productRepository.save(product), ProductDTO.class);
    }

    /**
     * Buscar por id
     * @param id
     * @return Retorna el DTO que corresponde a ese ID
     */
    public ProductDTO readProduct(Long id) {
        if (productRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe el producto con el id: " + id);

        Optional<Product> product = productRepository.findById(id);
        return mapper.convertValue(product, ProductDTO.class);
    }

    /**
     * Modificar
     * @param productDTO
     * @return Graba cambios en BBDD y retorna el DTO
     */
    public ProductDTO updateProduct(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        if (productRepository.findById(product.getId()).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe el producto que quieres modificar");

        return mapper.convertValue(productRepository.save(product), ProductDTO.class);
    }

    /**
     * Eliminar
     * @param id Elimina según id
     */
    public void deleteProduct(Long id) {
        if (productRepository.findById(id).isEmpty())
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No existe el producto con el id: " + id);

        productRepository.deleteById(id);
    }

    /**
     * Listar
     * @return Retorna listado completo de entidades
     */
    public Set<ProductDTO> getListProduct() {
        List<Product> categories = productRepository.findAll();
        Set<ProductDTO> categoriesDTO = new HashSet<>();
        for (Product product: categories) {
            categoriesDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return categoriesDTO;
    }

    /**.
     * Método a partir de Query
     * @param name Busca entidad por nombre
     * @return Retorna entidad
     */
    public Product findProductByName(String name) {
        return productRepository.findProductByName(name);
    }

}
