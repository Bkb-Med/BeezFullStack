package com.ensias.beez.service;

import com.ensias.beez.entity.Ruche;
import com.ensias.beez.entity.TempSensor;
import com.ensias.beez.entity.TrafficSensor;
import com.ensias.beez.entity.WeightSensor;
import com.ensias.beez.repository.TempRepo;
import com.ensias.beez.repository.TrafficRepo;
import com.ensias.beez.repository.WeightRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorService {
    @Autowired
    private TempRepo tempRepo;
    public List<TempSensor> getTempByRuche(int rucheId) {
        return  tempRepo.findTempByRuche_Id(rucheId);
    }
    @Autowired
    private TrafficRepo trafficRepo;
    public List<TrafficSensor> getTrafficByRuche(int rucheId) {
        return  trafficRepo.findTrafficByRuche_Id(rucheId);
    }
    @Autowired
    private WeightRepo weightRepo;
    public List<WeightSensor> getWeightByRuche(int rucheId) {
        return  weightRepo.findWeightByRuche_Id(rucheId);
    }
}