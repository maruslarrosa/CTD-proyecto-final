package com.dh.backend.service;

import com.dh.backend.dto.AvailabilityRequestDTO;
import com.dh.backend.dto.ProductDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.model.Product;
import com.dh.backend.repository.IProductRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService {

    @Autowired
    private final IProductRepository productRepository;

    public ProductService(IProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Autowired
    private CityService cityService;

    @Autowired
    private BookingService bookingService;

    private static final Logger logger = Logger.getLogger(ProductService.class);

    @Autowired
    ObjectMapper mapper;

    public ProductDTO createProduct(ProductDTO productDTO) throws BadRequestException {
        if(productDTO.getName().isEmpty() || productDTO == null)
            throw new BadRequestException("El producto no puede ser null");
        Long cityId = productDTO.getCity_id().getId();
        Product product = mapper.convertValue(productDTO, Product.class);
        if (this.findProductByName(product.getName()) != null)
            throw new BadRequestException("Este producto ya existe");

        productDTO = mapper.convertValue(productRepository.save(product), ProductDTO.class);
        productDTO.setCity_id(cityService.findCityById(cityId));

        logger.info("Categoria creada exitosamente");

        return productDTO;
    }

    public ProductDTO readProduct(Long id) throws BadRequestException, ResourceNotFoundException {
        if( id == null || id < 1 )
            throw new BadRequestException("El id del producto no puede ser null ni negativo");
        if (productRepository.findById(id).isEmpty())
            throw new ResourceNotFoundException("No existe existe  el producto con id: " + id);
        Optional<Product> product = productRepository.findById(id);
        logger.info("Se encontró la categoría " + product.get().getName());
        return mapper.convertValue(product, ProductDTO.class);
    }

    public ProductDTO updateProduct(ProductDTO productDTO) throws BadRequestException, ResourceNotFoundException {

        if (productDTO == null )
            throw new BadRequestException("El producto no puede ser null");
        if (productDTO.getId() == null)
            throw new BadRequestException("El id del producto no puede ser null");
        Product product = mapper.convertValue(productDTO, Product.class);
        Product productUpdate = productRepository.findById(product.getId()).orElse(null);
        if (productUpdate == null)
            throw new ResourceNotFoundException("No existe el producto que quieres modificar");
        productUpdate.setName(product.getName());
        productUpdate.setDescription(product.getDescription());
        productUpdate.setAvailability(product.getAvailability());
        productUpdate.setPolicies(product.getPolicies());
        productUpdate.setLongitude(product.getLongitude());
        productUpdate.setLatitude(product.getLatitude());
        productUpdate.setImages(product.getImages());
        productUpdate.setCity_id(product.getCity_id());
        productUpdate.setCategory_id(product.getCategory_id());
        productUpdate.setCharacteristicsInProducts_id(product.getCharacteristicsInProducts_id());

        logger.info("Producto modificado exitosamente");
        return mapper.convertValue(productRepository.save(productUpdate), ProductDTO.class);
    }

    public void deleteProduct(Long id) throws BadRequestException, ResourceNotFoundException {
        if( id == null || id < 1 )
            throw new BadRequestException("El id del producto no puede ser null ni negativo");
        if (productRepository.findById(id).isEmpty())
            throw new ResourceNotFoundException("No existe el producto con id: " + id);
        logger.info("Producto eliminado exitosamente");
        productRepository.deleteById(id);
    }

    public Set<ProductDTO> getListProduct() {
        List<Product> products = productRepository.findAll();
        Set<ProductDTO> productsDTO = new HashSet<>();
        for (Product product: products) {
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return productsDTO;
    }

    // Lista de Productos según ciudad
    public List<ProductDTO> findProductsByCity(Long id)  throws BadRequestException {
        if (id == null || id < 1)
            throw new BadRequestException("El id de la ciudad no puede ser null, ni negativo");

        List<Product> products = productRepository.findProductsByCity(id);
        List<ProductDTO> productsDTO = new ArrayList<>();
        for (Product product: products) {
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return productsDTO;
    }

    public List<ProductDTO> findProductsByCategory(Long id) throws BadRequestException {
        if (id == null || id < 1)
            throw new BadRequestException("El id de la categoría no puede ser null, ni negativo");

        List<Product> products = productRepository.findProductsByCategory(id);
        List<ProductDTO> productsDTO = new ArrayList<>();
        for (Product product: products) {
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }
        return productsDTO;
    }

    public List<ProductDTO> getProductsRandom() {
        int NUMBER_OF_ELEMENTS = 3;
        Random rand = new Random();

        List<Product> products = productRepository.findAll();
        List<ProductDTO> productsDTO = new ArrayList<>();
        List<Product> productsRandom = new ArrayList<>();

        for (int i = 0; i < NUMBER_OF_ELEMENTS; i++) {
            int randomIndex = rand.nextInt(products.size());
            Product randomElement = products.get(randomIndex);
            productsRandom.add(randomElement);
            products.remove(randomElement);
        }

        for (Product product: productsRandom) {
            productsDTO.add(mapper.convertValue(product, ProductDTO.class));
        }

        return productsDTO;
    }

    public Product findProductByName(String name) {
        return productRepository.findProductByName(name);
    }

    public List<Product> findAvailableProductsByCityAndDate(AvailabilityRequestDTO availabilityRequestDTO) {
        return productRepository.findAvailableProductsByCityAndDate(
                availabilityRequestDTO.getCity_id()
                , availabilityRequestDTO.getCheckIn()
                , availabilityRequestDTO.getCheckOut());
    }

    public List<Product> findAvailableProductsByDate(AvailabilityRequestDTO availabilityRequestDTO) {
        return productRepository.findAvailableProductsByDate(
                availabilityRequestDTO.getCheckIn()
                , availabilityRequestDTO.getCheckOut());
    }
}
