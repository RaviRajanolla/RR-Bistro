package com.rr_bistro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rr_bistro.entity.MenuItem;


public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    List<MenuItem> findByCategory(String category); 
}
