package com.dh.backend.repository;

import com.dh.backend.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICityRepository extends JpaRepository<City, Long> {
    @Query("SELECT c FROM City c WHERE c.name = ?1")
    City findCityByName(String name);
}
