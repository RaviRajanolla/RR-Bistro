package com.rr_bistro.service;

import java.util.List;

import com.rr_bistro.entity.Admin;

public interface AdminService {
	
	Admin createAdmin(Admin admin);
    List<Admin> getAllAdmins();
    Admin getAdminById(Long id);
    void deleteAdmin(Long id);

}
