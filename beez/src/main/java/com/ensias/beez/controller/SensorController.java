package com.ensias.beez.controller;

import com.ensias.beez.entity.Endroit;
import com.ensias.beez.entity.TempSensor;
import com.ensias.beez.entity.TrafficSensor;
import com.ensias.beez.entity.WeightSensor;
import com.ensias.beez.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class SensorController {
    @Autowired
    private SensorService sensorService;

    @GetMapping("/Temperature/ruche/{id}")
    public List<TempSensor> findTempByRuche(@PathVariable int id){
        return sensorService.getTempByRuche(id);
    }

    @GetMapping("/Traffic/ruche/{id}")
    public List<TrafficSensor> findTrafByRuche(@PathVariable int id){
        return sensorService.getTrafficByRuche(id);
    }
    @GetMapping("/Weight/ruche/{id}")
    public List<WeightSensor> findWgtByRuche(@PathVariable int id){
        return sensorService.getWeightByRuche(id);
    }


}
