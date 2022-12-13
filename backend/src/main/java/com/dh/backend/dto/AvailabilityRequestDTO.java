package com.dh.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AvailabilityRequestDTO {
    private Long city_id;
    private LocalDate checkIn;
    private LocalDate checkOut;
}
