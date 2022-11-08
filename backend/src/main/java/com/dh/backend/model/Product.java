package com.dh.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "PRODUCTS")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Getter @Setter
public class Product {
    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    @Column(name = "ID")
    private Long id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "AVAILABITY")
    private String availabity;
    @Column(name = "POLICIES")
    private String policies;
    @Column(name = "LONGITUDE")
    private String longitude;
    @Column(name = "LATITUDE")
    private String latitude;

    // Un producto puede tener varias imágenes
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    private Set<Image> images = new HashSet<>();

    /* // Un producto puede pertenecer a una categoría
    private Category category_id;

    // Un producto está en una ciudad
    private City city_id;

    // Un producto puede tener varias características
    private Set<Characteristic> characteristics = new HashSet<>();*/

    // Constructores
    public Product() {

    }

    public Product(String name, String description, String availabity, String policies, String longitude, String latitude) {
        this.name = name;
        this.description = description;
        this.availabity = availabity;
        this.policies = policies;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public Product(Long id, String name, String description, String availabity, String policies, String longitude, String latitude) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.availabity = availabity;
        this.policies = policies;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}
