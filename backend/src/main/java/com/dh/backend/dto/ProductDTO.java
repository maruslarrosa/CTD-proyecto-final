package com.dh.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;


@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Long id;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    private String name;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 400)
    private String description;

    private String availability;

    private String policies;

    private String longitude;

    private String latitude;

    private List<ImageDTO> images;

    private CityDTO city_id;

    private CategoryDTO category_id;

    private Set<CharacteristicDTO> characteristicsInProducts_id;
}
