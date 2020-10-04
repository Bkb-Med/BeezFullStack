package com.ensias.beez.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Agent extends Personne{
    @NonNull
    private long cnssNum;

    public Agent(long  id, String cin, String fullName, String email, long cnssNum) {
        super(id, cin, fullName, email);
        this.cnssNum = cnssNum;
    }
}
