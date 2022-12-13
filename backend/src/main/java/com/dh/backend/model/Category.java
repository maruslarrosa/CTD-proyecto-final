package com.dh.backend.model;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
=======

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
>>>>>>> c4e1ced1b1da590fb4e94f7e37a222c401d8e372


@Entity
@Table(name = "CATEGORIES")
@Getter @Setter
<<<<<<< HEAD
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
=======
@AllArgsConstructor
@NoArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "category_sequence")
    @Column(name = "ID")
    private Long id;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "NAME")
    private String name;

    @NotNull
    @NotBlank
    @Size(min = 5, max = 400)
    @Column(name = "DESCRIPTION")
    private String description;

    @NotNull
    @NotBlank
    @Size( min = 8, max = 200)
    @Column(name = "URL")
    private String url;
>>>>>>> c4e1ced1b1da590fb4e94f7e37a222c401d8e372
}
