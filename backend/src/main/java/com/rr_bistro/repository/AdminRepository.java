package com.rr_bistro.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rr_bistro.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	
    Optional<Admin> findByEmail(String email);
}
