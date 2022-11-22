package com.dh.backend.model.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ROLES")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "role_sequence")
    @Column(name = "ID")
    private Long id;
    @NotNull
    @NotBlank
    @Column(name = "NAME")
    private String name;
}
