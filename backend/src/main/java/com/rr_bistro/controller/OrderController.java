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

import com.rr_bistro.entity.Order;
import com.rr_bistro.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")

public class OrderController {
	
	
	
		  @Autowired
		    private OrderService orderService;


//		    @GetMapping
//		    public List<Order> getAllOrders() {
//		        return orderService.getAllOrders();
//		    }
//
//		    @GetMapping("/{id}")
//		    public Order getOrder(@PathVariable Long id) {
//		        return orderService.getOrderById(id);
//		    }
//
//		    @DeleteMapping("/{id}")
//		    public void cancelOrder(@PathVariable Long id) {
//		        orderService.cancelOrder(id);
//		    }
		    	
		    // Place a new order
		    @PostMapping
		    public Order placeOrder(@RequestBody Order order) {
		        return orderService.placeOrder(order);
		    }

		    // Get orders by user ID - explicitly specify path variable name to avoid issues
		    @GetMapping("/user/{userId}")
		    public List<Order> getOrdersByUser(@PathVariable("userId") Long userId) {
		        return orderService.getOrdersByUserId(userId);
		    }

		    // Get all orders
		    @GetMapping
		    public List<Order> getAllOrders() {
		        return orderService.getAllOrders();
		    }

		    // Get order by order ID
		    @GetMapping("/{id}")
		    public Order getOrder(@PathVariable("id") Long id) {
		        return orderService.getOrderById(id);
		    }

		    // Cancel order by order ID
		    @DeleteMapping("/{id}")
		    public void cancelOrder(@PathVariable("id") Long id) {
		        orderService.cancelOrder(id);
		    }
}
