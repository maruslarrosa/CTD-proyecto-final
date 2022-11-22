package com.dh.backend.model;

import com.dh.backend.model.jwt.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

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

    @NotNull
    @NotBlank
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CHECK_IN")
    private Date checkIn;

    @NotNull
    @NotBlank
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CHECK_OUT")
    private Date checkOut;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}

