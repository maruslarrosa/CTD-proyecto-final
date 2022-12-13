package com.dh.backend.repository;

import com.dh.backend.model.Characteristic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICharacteristicRepository extends JpaRepository<Characteristic, Long> {
    @Query("SELECT c FROM Characteristic c WHERE c.name = ?1")
    Characteristic findCharacteristicByName(String name);
}
