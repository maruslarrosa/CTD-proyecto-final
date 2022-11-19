package com.dh.backend.repository;

import com.dh.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.name = ?1")
    Product findProductByName(String name);

    @Query("SELECT c FROM Product c WHERE c.city_id.id= ?1")
    List<Product> findProductsByCity(Long id);

    @Query("SELECT c FROM Product c WHERE c.category_id.id= ?1")
    List<Product> findProductsByCategory(Long id);
}
