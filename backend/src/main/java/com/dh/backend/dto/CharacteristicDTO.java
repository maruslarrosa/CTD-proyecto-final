package com.dh.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CharacteristicDTO {
    private Long id;
    private String name;
    private String iconUrl;

    // Constructores
    public CharacteristicDTO() {

    }

    public CharacteristicDTO(String name, String iconUrl) {
        this.name = name;
        this.iconUrl = iconUrl;
    }

    public CharacteristicDTO(Long id, String name, String iconUrl) {
        this.id = id;
        this.name = name;
        this.iconUrl = iconUrl;
    }
}
