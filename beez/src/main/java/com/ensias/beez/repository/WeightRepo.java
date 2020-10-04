package com.ensias.beez.repository;

import com.ensias.beez.entity.WeightSensor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WeightRepo extends CrudRepository<WeightSensor, Long> {
    List<WeightSensor> findWeightByRuche_Id(long rucheId);
}
