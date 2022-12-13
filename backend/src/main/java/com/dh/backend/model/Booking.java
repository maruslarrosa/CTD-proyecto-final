package com.dh.backend.model;

import com.dh.backend.model.jwt.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "BOOKINGS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "booking_sequence")
    @Column(name = "ID")
    private Long id;


    @Column(name = "CHECK_IN")
    private LocalDate checkIn;


    @Column(name = "CHECK_OUT")
    private LocalDate checkOut;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;
}
