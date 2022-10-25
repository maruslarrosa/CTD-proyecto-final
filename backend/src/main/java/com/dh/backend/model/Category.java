package com.dh.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name = "CATEGORIES")
@Getter @Setter
public class Category {

    @Id
    @SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
    @Column(name = "ID_CATEGORY")
    private Long id;
    @Column(name = "TITLE_CATEGORY")
    private String title;
    @Column(name = "DESCRIPTION_CATEGORY")
    private String description;
    @Column(name = "URL_CATEGORY")
    private String url;

    //Constructores
    public Category() {

    }

    public Category(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public Category(Long id, String title, String description, String url) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }
}
