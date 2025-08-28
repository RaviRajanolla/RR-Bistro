package com.rr_bistro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rr_bistro.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
