package com.rr_bistro.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "reviews")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder


public class Review {
	
	
		    @Id
		    @GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Long id;

		    private int rating; // 1 to 5

		    private String comment;

		    private LocalDateTime reviewDate;

		    @ManyToOne
		    @JoinColumn(name = "user_id")
		    private User user;

		    @ManyToOne
		    @JoinColumn(name = "menu_item_id")
		    private MenuItem menuItem;

}
