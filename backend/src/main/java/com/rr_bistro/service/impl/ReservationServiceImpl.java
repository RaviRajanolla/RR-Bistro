package com.rr_bistro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rr_bistro.entity.Reservation;
import com.rr_bistro.repository.ReservationRepository;
import com.rr_bistro.service.ReservationService;

@Service
public class ReservationServiceImpl implements ReservationService {
	
	 @Autowired
	    private ReservationRepository reservationRepository;

	@Override
	public Reservation bookReservation(Reservation reservation) {
		// TODO Auto-generated method stub
		return reservationRepository.save(reservation);
	}

	@Override
	public List<Reservation> getReservationsByUserId(Long userId) {
		// TODO Auto-generated method stub
		return reservationRepository.findByUserId(userId);
	}

	@Override
	public void cancelReservation(Long id) {
		 reservationRepository.deleteById(id);		
	}
}
