package com.dh.backend.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter @Setter
public class CategoryDTO {

    private Long id;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String name;

    @NotNull
    @NotBlank
    @Size(min = 5, max = 400)
    private String description;

    @NotNull
    @NotBlank
    @Size( min = 8, max = 200)
    private String url;

    // Constructores
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
