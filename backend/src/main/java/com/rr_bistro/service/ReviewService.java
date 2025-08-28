package com.rr_bistro.service;

import java.util.List;

import com.rr_bistro.entity.Review;


public interface ReviewService {
	
	 Review addReview(Review review);
	    List<Review> getReviewsByUserId(Long userId);
	    List<Review> getReviewsByMenuItemId(Long menuItemId);
	    void deleteReview(Long id);


}
