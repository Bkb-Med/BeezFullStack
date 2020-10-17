package com.ensias.beez.repository;

import com.ensias.beez.entity.Endroit;
import com.ensias.beez.entity.Ruche;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


import java.util.List;

public interface RucheRepo extends JpaRepository<Ruche, Long> {
    Ruche findByReference(String reference);
   // @Query("select rc from Ruche rc where rc.endroit_id = ?1")
    List<Ruche> findByEndroit_id(long id);
}
