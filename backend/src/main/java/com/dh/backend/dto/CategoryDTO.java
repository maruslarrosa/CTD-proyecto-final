package com.dh.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CategoryDTO {
    private Long id;
    private String title;
    private String description;
    private String url;
}
