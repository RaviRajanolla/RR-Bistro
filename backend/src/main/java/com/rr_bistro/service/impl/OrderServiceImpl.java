package com.rr_bistro.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rr_bistro.entity.MenuItem;
import com.rr_bistro.entity.Order;
import com.rr_bistro.entity.OrderItem;
import com.rr_bistro.entity.OrderStatus;
import com.rr_bistro.entity.User;
import com.rr_bistro.repository.MenuItemRepository;
import com.rr_bistro.repository.OrderItemRepository;
import com.rr_bistro.repository.OrderRepository;
import com.rr_bistro.repository.UserRepository;
import com.rr_bistro.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
    private OrderRepository orderRepository;
	
	@Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private MenuItemRepository menuItemRepository;

    @Autowired
    private UserRepository userRepository;

	@Override
	public Order placeOrder(Order order) {
		 User user = userRepository.findById(order.getUser().getId()).orElseThrow(() ->
         new RuntimeException("User not found with ID: " + order.getUser().getId()));
		 order.setUser(user);
 
		 order.setOrderTime(LocalDateTime.now());
		 order.setStatus(OrderStatus.PENDING); //
	        
	        double totalAmount = 0;
	        // Save order first to get an order ID
	        Order savedOrder = orderRepository.save(order);

	        for (OrderItem item : order.getItems()) {
	            // Validate menu item
	            MenuItem menuItem = menuItemRepository.findById(item.getMenuItem().getId()).orElseThrow(() ->
	                    new RuntimeException("Menu item not found with ID: " + item.getMenuItem().getId()));

	            item.setMenuItem(menuItem);
	            item.setOrder(savedOrder);
	            item.setPrice(menuItem.getPrice() * item.getQuantity());
	            totalAmount += item.getPrice();

	            orderItemRepository.save(item);
	        }

	        savedOrder.setTotalAmount(totalAmount);		
	        
	        return orderRepository.save(savedOrder);
	}

	@Override
	public List<Order> getOrdersByUserId(Long userId) {
		// TODO Auto-generated method stub
		return orderRepository.findByUserId(userId);
	}

	@Override
	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return orderRepository.findAll();
	}

	@Override
	public Order getOrderById(Long id) {
		// TODO Auto-generated method stub
		return orderRepository.findById(id).orElse(null);
	}

	@Override
	public void cancelOrder(Long id) {
		orderRepository.deleteById(id);				
	}

}
