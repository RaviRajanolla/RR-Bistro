package com.rr_bistro.service;

import java.util.List;

import com.rr_bistro.entity.Order;


public interface OrderService {
	
	Order placeOrder(Order order);
    List<Order> getOrdersByUserId(Long userId);
    List<Order> getAllOrders();
    Order getOrderById(Long id);
    void cancelOrder(Long id);

}
