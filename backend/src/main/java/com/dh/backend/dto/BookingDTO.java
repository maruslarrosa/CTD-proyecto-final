package com.dh.backend.dto;

import com.dh.backend.dto.jwt.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDTO {

    private Long id;

    private LocalDate checkIn;

    private LocalDate checkOut;

    private ProductDTO product;

    private UserDTO user;
}

