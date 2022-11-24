package com.dh.backend.dto;

import com.dh.backend.model.Product;
import com.dh.backend.model.jwt.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDTO {

    private Long id;

    @NotNull
    @NotBlank
    @Temporal(TemporalType.TIMESTAMP)
    private Date checkIn;

    @NotNull
    @NotBlank
    @Temporal(TemporalType.TIMESTAMP)
    private Date checkOut;

    private Product product;

    private User user;
}
