package com.rr_bistro.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rr_bistro.entity.Admin;
import com.rr_bistro.repository.AdminRepository;
import com.rr_bistro.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
	
	private final AdminRepository adminRepository;
	

	public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
        

}
	@Override
	public Admin createAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return adminRepository.save(admin);
	}

	@Override
	public List<Admin> getAllAdmins() {
		// TODO Auto-generated method stub
		return adminRepository.findAll();
	}

	@Override
	public Admin getAdminById(Long id) {
		// TODO Auto-generated method stub
		return adminRepository.findById(id).orElse(null);
	}

	@Override
	public void deleteAdmin(Long id) {
		adminRepository.deleteById(id);		
	}



}








