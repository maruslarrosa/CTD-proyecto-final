package com.dh.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CategoryDTO {
    private Long id;
    private String name;
    private String description;
    private String url;

    // CONSTRUCTORES
    public CategoryDTO() {

    }

    public CategoryDTO(String name, String description, String url) {
        this.name = name;
        this.description = description;
        this.url = url;
    }

    public CategoryDTO(Long id, String name, String description, String url) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
    }
}
