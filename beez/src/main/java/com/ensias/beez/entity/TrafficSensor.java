package com.ensias.beez.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
@Data
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
public class TrafficSensor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @NonNull
    private String reference;
    @NonNull
    private double value;
    @NonNull
    private Date dateTime;
    @OneToOne(fetch = FetchType.LAZY)
    @NonNull
    private Ruche ruche;
}
