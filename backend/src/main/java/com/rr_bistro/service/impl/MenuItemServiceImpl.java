package com.rr_bistro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rr_bistro.entity.MenuItem;
import com.rr_bistro.repository.MenuItemRepository;
import com.rr_bistro.service.MenuItemService;

@Service
public class MenuItemServiceImpl implements MenuItemService {
	
	 @Autowired
	    private MenuItemRepository menuItemRepository;

	@Override
	public MenuItem saveItem(MenuItem item) {
		// TODO Auto-generated method stub
		return  menuItemRepository.save(item);
	}

	@Override
	public List<MenuItem> getAllItems() {
		// TODO Auto-generated method stub
		return menuItemRepository.findAll();
	}

	@Override
	public MenuItem getItemById(Long id) {
		// TODO Auto-generated method stub
		return menuItemRepository.findById(id).orElse(null);
	}

	@Override
	public List<MenuItem> getItemsByCategory(String category) {
		// TODO Auto-generated method stub
		return menuItemRepository.findByCategory(category);
	}

	@Override
	public void deleteItem(Long id) {
		menuItemRepository.deleteById(id);		
	}


}

