package com.ensias.beez.entity;

import com.ensias.beez.repository.TempRepo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "RUCHE")
public class Ruche {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NonNull
    private String reference;
    @NonNull
    private Date dateTime;
    @OneToOne(fetch = FetchType.LAZY)
    @NonNull
    private Endroit endroit;
    @OneToMany(cascade = CascadeType.ALL,targetEntity = TempSensor.class)
    @JoinColumn(name = "ruche_id", referencedColumnName = "id")
    @JsonIgnore
    private List<TempSensor> tempSensors;
   @OneToMany(cascade = CascadeType.ALL,targetEntity = TrafficSensor.class)
    @JoinColumn(name = "ruche_id", referencedColumnName = "id")
    @JsonIgnore
    private List<TrafficSensor> trafficSensors;
    @OneToMany(cascade = CascadeType.ALL,targetEntity = WeightSensor.class)
    @JoinColumn(name = "ruche_id", referencedColumnName = "id")
    @JsonIgnore
    private List<WeightSensor> weightSensors;
    }
