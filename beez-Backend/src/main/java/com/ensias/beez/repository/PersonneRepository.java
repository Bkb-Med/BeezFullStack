package com.ensias.beez.repository;

import com.ensias.beez.entity.Personne;

import javax.transaction.Transactional;

@Transactional
public interface PersonneRepository extends PersonneBaseRepository<Personne> { /* ... */ }
