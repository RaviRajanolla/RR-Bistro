package com.rr_bistro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rr_bistro.entity.User;
import com.rr_bistro.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")


public class UserController {
	
	 @Autowired
	    private UserService userService;

//	    @PostMapping("/register")
//	    public User registerUser(@RequestBody User user) {
//	        return userService.saveUser(user);
//	    }
//
//	    @GetMapping
//	    public List<User> getAllUsers() {
//	        return userService.getAllUsers();
//	    }
//
//	    @GetMapping("/{id}")
//	    public User getUser(@PathVariable Long id) {
//	        return userService.getUserById(id);
//	    }
//
//	    @DeleteMapping("/{id}")
//	    public void deleteUser(@PathVariable Long id) {
//	        userService.deleteUser(id);
//	    }
//	    
//	    
	 // ✅ Register a new user
	    @PostMapping("/register")
	    public User registerUser(@RequestBody User user) {
	    	if (user.getRole() == null) {
	            user.setRole("CUSTOMER");
	        }
//	        User savedUser = userService.saveUser(user);
	        return userService.saveUser(user);
	    }

	    // ✅ Get all users
	    @GetMapping
	    public ResponseEntity<List<User>> getAllUsers() {
	        List<User> users = userService.getAllUsers();
	        return ResponseEntity.ok(users);
	    }

	    // ✅ Get user by ID
	    @GetMapping("/{id}")
	    public ResponseEntity<User> getUserById(@PathVariable Long id) {
	        User user = userService.getUserById(id);
	        return ResponseEntity.ok(user);
	    }

	    // ✅ Delete user by ID
	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
	        userService.deleteUser(id);
	        return ResponseEntity.noContent().build();
	    }
	    
	   
}
