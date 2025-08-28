package com.rr_bistro.service;

import java.util.List;

import com.rr_bistro.entity.Reservation;


public interface ReservationService {
	
	Reservation bookReservation(Reservation reservation);
    List<Reservation> getReservationsByUserId(Long userId);
    void cancelReservation(Long id);

}
