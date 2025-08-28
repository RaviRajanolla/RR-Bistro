package com.rr_bistro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rr_bistro.entity.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);
}
