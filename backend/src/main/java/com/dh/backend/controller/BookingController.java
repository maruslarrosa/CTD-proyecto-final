package com.dh.backend.controller;

import com.dh.backend.dto.AvailabilityResponseDTO;
import com.dh.backend.dto.BookingDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.service.BookingService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservas")
public class BookingController {
    @Autowired
    BookingService bookingService;

    @Autowired
    ObjectMapper mapper;

    @PostMapping
    public ResponseEntity<BookingDTO> createBooking(@RequestBody BookingDTO bookingDTO) throws Exception {
        return ResponseEntity.ok(bookingService.createBooking(bookingDTO));
    }

    @GetMapping
    public List<BookingDTO> getListBookings() {
        return bookingService.getListBookings();
    }

    @GetMapping("/productos/{id}")
    public  ResponseEntity<List<AvailabilityResponseDTO>> findBookingByProduct(@PathVariable Long id)  throws BadRequestException {
        List<AvailabilityResponseDTO> availabilityResponseDTOS = bookingService.findBookingByProduct(id);
        return ResponseEntity.ok(availabilityResponseDTOS);
    }
}
