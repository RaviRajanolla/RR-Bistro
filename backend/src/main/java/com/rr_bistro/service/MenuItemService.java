package com.rr_bistro.service;

import java.util.List;

import com.rr_bistro.entity.MenuItem;


public interface MenuItemService {
	
	 MenuItem saveItem(MenuItem item);
	    List<MenuItem> getAllItems();
	    MenuItem getItemById(Long id);
	    List<MenuItem> getItemsByCategory(String category);
	    void deleteItem(Long id);

}
