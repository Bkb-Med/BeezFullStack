package com.ensias.beez.repository;

import com.ensias.beez.entity.TrafficSensor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TrafficRepo extends CrudRepository<TrafficSensor, Long> {
    List<TrafficSensor> findTrafficByRuche_Id(long rucheId);
}
