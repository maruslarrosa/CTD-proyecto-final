package com.dh.backend.repository;

import com.dh.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBookingRepository extends JpaRepository<Booking, Long> {
    @Query("SELECT p FROM Booking p WHERE p.product.id=?1")
    List<Booking> findBookingByProduct(Long id);
}
