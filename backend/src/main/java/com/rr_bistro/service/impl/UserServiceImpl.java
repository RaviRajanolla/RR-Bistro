package com.rr_bistro.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rr_bistro.entity.User;
import com.rr_bistro.exception.EmailAlreadyExistsException;
import com.rr_bistro.repository.UserRepository;
import com.rr_bistro.service.UserService;


@Service
public class UserServiceImpl implements UserService {
	
	 @Autowired 
	    private UserRepository userRepository;

	@Override
	public User saveUser(User user) {
		 Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
		    if (existingUser.isPresent()) {
		        throw new EmailAlreadyExistsException("Email already exists: " + user.getEmail());
		    }
		    
		    return userRepository.save(user);
	}

	@Override
	public Optional<User> findByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public User getUserById(Long id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id).orElseThrow(()-> new RuntimeException("User not found with ID: " + id));
	}

	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);		
	}
}
