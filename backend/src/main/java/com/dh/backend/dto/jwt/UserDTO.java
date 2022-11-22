package com.dh.backend.dto.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

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

    private RoleDTO role;
}
