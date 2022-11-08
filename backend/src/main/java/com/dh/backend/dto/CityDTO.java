package com.dh.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CityDTO {
    private Long id;
    private String name;

    // Constructores
    public CityDTO() {

    }

    public CityDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
