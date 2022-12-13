package com.dh.backend.repository;

import com.dh.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.name = ?1")
    Product findProductByName(String name);

    @Query("SELECT c FROM Product c WHERE c.city_id.id= ?1")
    List<Product> findProductsByCity(Long id);

    @Query("SELECT c FROM Product c WHERE c.category_id.id= ?1")
    List<Product> findProductsByCategory(Long id);

    @Query(value = "select * from PRODUCTS p where p.city_id = :city_id and not exists (select 1 from BOOKINGS where product = p.id and :checkOut <= CHECK_OUT and :checkIn >= CHECK_IN )",nativeQuery = true)
    List<Product> findAvailableProductsByCityAndDate(@Param("city_id") Long city_id, @Param("checkIn") LocalDate checkIn, @Param("checkOut") LocalDate checkOut);

    @Query(value = "select * from PRODUCTS p where not exists (select 1 from BOOKINGS where product = p.id and :checkOut <= CHECK_OUT and :checkIn >= CHECK_IN )",nativeQuery = true)
    List<Product> findAvailableProductsByDate(@Param("checkIn") LocalDate checkIn, @Param("checkOut") LocalDate checkOut);
}
