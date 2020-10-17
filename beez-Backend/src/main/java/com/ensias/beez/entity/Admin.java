package com.ensias.beez.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
public class Admin extends Personne {
    @NonNull
    private long NumRegistreCommerce;


    public Admin(long  id, String cin, String fullName, String email, long NumRegistreCommerce) {
        super(id, cin, fullName, email);
        this.NumRegistreCommerce = NumRegistreCommerce;
    }
}
