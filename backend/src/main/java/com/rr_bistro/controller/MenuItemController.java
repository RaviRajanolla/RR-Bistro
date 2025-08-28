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

import com.rr_bistro.entity.MenuItem;
import com.rr_bistro.service.MenuItemService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/menu")
public class MenuItemController {
	
	 @Autowired
	    private MenuItemService menuItemService;

	    @PostMapping
	    public MenuItem addItem(@RequestBody MenuItem item) {
	        return menuItemService.saveItem(item);
	    }

	    @GetMapping
	    public List<MenuItem> getAllItems() {
	        return menuItemService.getAllItems();
	    }

	    @GetMapping("/{id}")
	    public MenuItem getItem(@PathVariable Long id) {
	        return menuItemService.getItemById(id);
	    }

	    @GetMapping("/category/{category}")
	    public List<MenuItem> getItemsByCategory(@PathVariable String category) {
	        return menuItemService.getItemsByCategory(category);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteItem(@PathVariable Long id) {
	        menuItemService.deleteItem(id);
	    }


}
