package com.rr_bistro.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity

public class User {
	
	
		
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    
	    @JsonProperty("name")
	    @Column(nullable = false)
	    private String fullName;

	    @Column(unique = true, nullable = false)
	    private String email;

	    @Column(nullable = false)
	    private String password;

	    @Column(nullable = false)
	    private String role; // e.g., "ADMIN", "CUSTOMER"

	    @Column(nullable = false)
	    private boolean active = true;

}
