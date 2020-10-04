package com.ensias.beez.repository;


import com.ensias.beez.entity.Agent;
import javax.transaction.Transactional;

@Transactional
public interface AgentRepository extends PersonneBaseRepository<Agent> { /* ... */ }

