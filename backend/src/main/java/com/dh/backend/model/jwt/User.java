package com.dh.backend.model.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "USERS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "user_sequence")
    @Column(name = "ID")
    private Long id;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "NAME")
    private String name;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "LASTNAME")
    private String lastName;

    @NotNull
    @NotBlank
    @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}", flags = Pattern.Flag.CASE_INSENSITIVE)
    private String email;

    @NotNull
    @NotBlank
    @Size(min = 6)
    @Column(name = "PASSWORD")
    private String password;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "CITY")
    private String city;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;
}
