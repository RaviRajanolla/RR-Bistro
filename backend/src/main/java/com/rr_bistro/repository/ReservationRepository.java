package com.rr_bistro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rr_bistro.entity.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation, Long>{
    List<Reservation> findByUserId(Long userId);
}
