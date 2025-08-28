package com.rr_bistro.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rr_bistro.entity.User;


public interface UserRepository extends JpaRepository<User, Long>{
	
	 Optional<User> findByEmail(String email);
	    Optional<User> existsByEmail(String email);
	    List<User> findByRole(String role); // Example: ADMIN, USER

	

}
