package com.rr_bistro.service;

import java.util.List;
import java.util.Optional;

import com.rr_bistro.entity.User;


public interface UserService {
	
	 User saveUser(User user);
	    Optional<User> findByEmail(String email);
	    List<User> getAllUsers();
	    User getUserById(Long id);
	    void deleteUser(Long id);

}
