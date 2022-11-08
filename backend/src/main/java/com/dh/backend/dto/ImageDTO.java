package com.dh.backend.dto;

import com.dh.backend.model.Product;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ImageDTO {
    private Long id;
    private String name;
    private String url;

    // Constructores
    public ImageDTO() {

    }

    public ImageDTO(String name, String url) {
        this.name = name;
        this.url = url;
    }

    public ImageDTO(Long id, String name, String url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }
}
