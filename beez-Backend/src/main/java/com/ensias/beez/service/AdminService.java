package com.ensias.beez.service;

import com.ensias.beez.entity.Admin;
import com.ensias.beez.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
    public Admin saveAdmin(Admin admin){
        return adminRepository.save(admin);
    }
    public List<Admin> getAdmins(){
        return (List<Admin>) adminRepository.findAll();
    }
    public Admin getAdminById(long id){
        return adminRepository.findById(id).orElse(null);
    }
    public Admin getAdminByFullName(String name){
        return adminRepository.findByFullName(name);
    }
    public Admin getAdminByCin(String cin){
        return adminRepository.findByCin(cin);
    }
    public String deleteAdmin(long id){
        adminRepository.deleteById(id);
        return "admin removed !! " + id;
    }
    public Admin updateAdmin(Admin admin){
        Admin admin_ex=adminRepository.findById(admin.getId()).orElse(null);
        admin_ex.setFullName(admin.getFullName());
        admin_ex.setEmail(admin.getEmail());
        admin_ex.setCin(admin.getCin());
        admin_ex.setNumRegistreCommerce(admin.getNumRegistreCommerce());
        return adminRepository.save(admin_ex);
    }

}
