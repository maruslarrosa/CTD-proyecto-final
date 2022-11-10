package com.dh.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "CHARACTERISTICS")
/*@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})*/
@Getter @Setter
public class Characteristic {
    @Id
    @SequenceGenerator(name = "characteristic_sequence", sequenceName = "characteristic_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "characteristic_sequence")
    @Column(name = "ID")
    private Long id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "ICON_URL")
    private String iconUrl;

    /*// Una característica puede corresponder a muchos productos
    @OneToMany(mappedBy = "characteristic", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();*/

    // Constructores
    public Characteristic() {

    }

    public Characteristic(String name, String iconUrl) {
        this.name = name;
        this.iconUrl = iconUrl;
    }

    public Characteristic(Long id, String name, String iconUrl) {
        this.id = id;
        this.name = name;
        this.iconUrl = iconUrl;
    }
}
