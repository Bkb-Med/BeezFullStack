package com.ensias.beez.repository;

import com.ensias.beez.entity.Personne;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
@NoRepositoryBean
public interface PersonneBaseRepository<T extends Personne>
        extends CrudRepository<T, Long> {

       public T findByEmail(String email);
       public T findByFullName(String name);
       public T  findByCin(String cin);
}
