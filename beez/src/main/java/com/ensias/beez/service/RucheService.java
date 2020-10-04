package com.ensias.beez.service;

import com.ensias.beez.entity.Ruche;
import com.ensias.beez.repository.RucheRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RucheService {
    @Autowired
    private RucheRepo rucheRepo;
    public Ruche saveRuche(Ruche ruche){
        return rucheRepo.save(ruche);
    }
    public List<Ruche> getRuches(){
        return  rucheRepo.findAll();
    }
    public Ruche getRucheById(long id){
        return rucheRepo.findById(id).orElse(null);
    }
    public List<Ruche> getRuchesByEndroitId(long id){
        return rucheRepo.findByEndroit_id(id);
    }
    public Ruche getRucheByReference(String reference){
        return rucheRepo.findByReference(reference);
    }
    public String deleteRuche(long id){
        rucheRepo.deleteById(id);
        return "ruche removed !! " + id;
    }
    public Ruche updateRuche(Ruche ruche){
        Ruche ruche_ex=rucheRepo.findById(ruche.getId()).orElse(null);
        ruche_ex.setDateTime(ruche.getDateTime());
        ruche_ex.setReference(ruche.getReference());
        ruche_ex.setEndroit(ruche.getEndroit());
        return rucheRepo.save(ruche_ex);
    }
}
