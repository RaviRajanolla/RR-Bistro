package com.rr_bistro.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Order {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private LocalDateTime orderTime;

	    private Double totalAmount;
	    
	    
//	    @Column(name = "status")
//	    private String status;
	    
	    @Enumerated(EnumType.STRING)
	    @Column(name = "status")
	    private OrderStatus status;
	   
	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<OrderItem> items = new ArrayList<>();
	
	

}
