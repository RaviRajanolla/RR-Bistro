package com.rr_bistro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rr_bistro.entity.Reservation;
import com.rr_bistro.service.ReservationService;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "*")

public class ReservationController {
	
	    @Autowired
	    private ReservationService reservationService;

	    @PostMapping
	    public Reservation bookReservation(@RequestBody Reservation reservation) {
	        return reservationService.bookReservation(reservation);
	    }

	    @GetMapping("/user/{userId}")
	    public List<Reservation> getReservationsByUser(@PathVariable Long userId) {
	        return reservationService.getReservationsByUserId(userId);
	    }

	    @DeleteMapping("/{id}")
	    public void cancelReservation(@PathVariable Long id) {
	        reservationService.cancelReservation(id);
	    }

	}