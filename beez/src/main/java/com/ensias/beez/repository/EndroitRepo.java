package com.ensias.beez.repository;

import com.ensias.beez.entity.Endroit;
import com.ensias.beez.entity.Ruche;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EndroitRepo extends JpaRepository<Endroit, Long> {
        Endroit findByReference(String reference);

}

