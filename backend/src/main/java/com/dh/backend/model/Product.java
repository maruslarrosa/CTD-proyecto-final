package com.dh.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "PRODUCTS")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "product_sequence")
    @Column(name = "ID")
    private Long id;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "NAME")
    private String name;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 400)
    @Column(name = "DESCRIPTION")
    private String description;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "AVAILABILITY")
    private String availability;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "POLICIES")
    private String policies;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "LONGITUDE")
    private String longitude;
    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "LATITUDE")
    private String latitude;

    // Un producto puede tener varias imágenes
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "products_id")
    private Set<Image> images = new HashSet<>();

    // Un producto está en una ciudad
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "city_id", nullable = false)
    private City city_id;

    // Un producto puede pertenecer a una categoría
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "category_id")
    private Category category_id;


    // Un producto puede tener varias características
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(
            name = "produts_characteristics",
            joinColumns = @JoinColumn(name = "products_id"),
            inverseJoinColumns = @JoinColumn(name = "characteristics_id")
    )
    private Set <Characteristic> characteristicsInProducts_id = new HashSet<>();
}
