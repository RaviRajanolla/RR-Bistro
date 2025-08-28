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

import com.rr_bistro.entity.Review;
import com.rr_bistro.service.ReviewService;


@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:5173")

public class ReviewController {
	

	    @Autowired
	    private ReviewService reviewService;

	    @PostMapping
	    public Review addReview(@RequestBody Review review) {
	        return reviewService.addReview(review);
	    }

	    @GetMapping("/user/{userId}")
	    public List<Review> getReviewsByUser(@PathVariable Long userId) {
	        return reviewService.getReviewsByUserId(userId);
	    }

	    @GetMapping("/item/{itemId}")
	    public List<Review> getReviewsByItem(@PathVariable Long itemId) {
	        return reviewService.getReviewsByMenuItemId(itemId);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteReview(@PathVariable Long id) {
	        reviewService.deleteReview(id);
	    }

	}



