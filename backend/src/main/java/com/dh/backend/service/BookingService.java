package com.dh.backend.service;

import com.dh.backend.dto.AvailabilityResponseDTO;
import com.dh.backend.dto.BookingDTO;
import com.dh.backend.dto.CategoryDTO;
import com.dh.backend.exceptions.BadRequestException;
import com.dh.backend.exceptions.ResourceNotFoundException;
import com.dh.backend.model.Booking;
import com.dh.backend.model.Category;
import com.dh.backend.repository.IBookingRepository;
import com.dh.backend.repository.ICategoryRepository;
import com.dh.backend.service.jwt.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BookingService {

    @Autowired
    private final IBookingRepository bookingRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private UserService userService;

    @Autowired
    ObjectMapper mapper;

    // Constructor
    public BookingService(IBookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    private static final Logger logger = Logger.getLogger(BookingService.class);


    public BookingDTO createBooking(BookingDTO bookingDTO) throws BadRequestException, ResourceNotFoundException {

        bookingDTO.setProduct(productService.readProduct(bookingDTO.getProduct().getId()));
        bookingDTO.setUser(userService.findById(bookingDTO.getUser().getId()));

        Booking booking = mapper.convertValue(bookingDTO, Booking.class);

        return mapper.convertValue(bookingRepository.save(booking), BookingDTO.class);
    }

    public List<BookingDTO> getListBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        List<BookingDTO> bookingsDTO = new ArrayList<>();
        for (Booking booking: bookings) {
            bookingsDTO.add(mapper.convertValue(booking, BookingDTO.class));
        }

        return bookingsDTO;
    }

    public List<AvailabilityResponseDTO> findBookingByProduct(Long id) throws  BadRequestException {
        if (id == null || id < 1)
            throw new BadRequestException("El id del producto no puede ser null, ni negativo");

        List<Booking> bookings = bookingRepository.findBookingByProduct(id);
        List<AvailabilityResponseDTO > availabilityResponseDTOS = new ArrayList<>();
        for (Booking booking: bookings) {
            availabilityResponseDTOS.add(mapper.convertValue(booking, AvailabilityResponseDTO.class));
        }

        return availabilityResponseDTOS;
    }
}
