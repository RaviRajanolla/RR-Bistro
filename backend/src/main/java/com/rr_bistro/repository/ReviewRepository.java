package com.rr_bistro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rr_bistro.entity.Review;


public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByUserId(Long userId);
    List<Review> findByMenuItemId(Long menuItemId);
}
