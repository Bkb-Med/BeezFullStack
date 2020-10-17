package com.ensias.beez.repository;

import com.ensias.beez.entity.TempSensor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface TempRepo extends CrudRepository<TempSensor, Long> {
    List<TempSensor> findTempByRuche_Id( long rucheId);

}