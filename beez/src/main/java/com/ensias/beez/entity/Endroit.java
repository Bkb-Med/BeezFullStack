package com.ensias.beez.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ENDROIT")
public class Endroit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NonNull
    private String reference;
    @OneToMany(cascade = CascadeType.ALL,targetEntity = Ruche.class)
    @JoinColumn(name = "endroit_id", referencedColumnName = "id")
    @JsonIgnore
    private List<Ruche> ruches;
}
