package com.ensias.beez.repository;

import com.ensias.beez.entity.Admin;

import javax.transaction.Transactional;

@Transactional
public interface AdminRepository extends PersonneBaseRepository<Admin> { /* ... */ }

