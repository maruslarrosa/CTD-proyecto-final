package com.dh.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "CITIES")
/*@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})*/
@Getter @Setter
public class City {
    @Id
    @SequenceGenerator(name = "city_sequence", sequenceName = "city_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    @Column(name = "ID")
    private Long id;
    @Column(name = "NAME")
    private String name;

    /*// Una ciudad puede tener muchos productos
    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();*/

    //Constructores
    public City() {

    }

    public City(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
