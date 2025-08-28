package com.rr_bistro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rr_bistro.entity.Review;
import com.rr_bistro.repository.ReviewRepository;
import com.rr_bistro.service.ReviewService;

@Service

public class ReviewServiceImpl implements ReviewService {
	
	 @Autowired
	    private ReviewRepository reviewRepository;

	@Override
	public Review addReview(Review review) {
		// TODO Auto-generated method stub
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getReviewsByUserId(Long userId) {
		// TODO Auto-generated method stub
		return  reviewRepository.findByUserId(userId);
	}

	@Override
	public List<Review> getReviewsByMenuItemId(Long menuItemId) {
		// TODO Auto-generated method stub
		return reviewRepository.findByMenuItemId(menuItemId);
	}

	@Override
	public void deleteReview(Long id) {
		 reviewRepository.deleteById(id);				
	}

	

}
