package com.dh.backend.dto;

import com.dh.backend.model.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter @Setter
public class ProductDTO {
    private Long id;
    private String name;
    private String description;
    private String availabity;
    private String policies;
    private String longitude;
    private String latitude;
    private Set<ImageDTO> images;

    //Constructores
    public ProductDTO() {

    }

    public ProductDTO(String name, String description, String availabity, String policies, String longitude, String latitude) {
        this.name = name;
        this.description = description;
        this.availabity = availabity;
        this.policies = policies;
        this.longitude = longitude;
        this.latitude = latitude;
        this.images = new HashSet<>();
    }

    public ProductDTO(Long id, String name, String description, String availabity, String policies, String longitude, String latitude) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.availabity = availabity;
        this.policies = policies;
        this.longitude = longitude;
        this.latitude = latitude;
        this.images = new HashSet<>();
    }
}
