package com.dh.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "IMAGES")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "image_sequence")
    @Column(name = "ID")
    private Long id;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "NAME")
    private String name;

    @NotNull
    @NotBlank
    @Size( min = 8, max = 200)
    @Column(name = "URL")
    private String url;
}
