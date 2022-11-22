package com.dh.backend.dto.jwt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoleDTO {

    private Long id;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 45)
    @Column(name = "NAME")
    private String name;
}
