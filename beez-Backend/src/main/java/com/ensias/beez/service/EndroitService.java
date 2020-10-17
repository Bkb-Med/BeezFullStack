package com.ensias.beez.service;

import com.ensias.beez.entity.Endroit;
import com.ensias.beez.entity.Ruche;
import com.ensias.beez.repository.EndroitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EndroitService {
    @Autowired
    private EndroitRepo endroitRepo;
    public Endroit saveEndroit(Endroit endroit){
        return endroitRepo.save(endroit);
    }
    public List<Endroit> getEndroits(){
        return (List<Endroit>) endroitRepo.findAll();
    }

    public Endroit getEndroitById(long id){
        return endroitRepo.findById(id).orElse(null);
    }

    public Endroit getEndroitByRefrence(String reference){
        return endroitRepo.findByReference(reference);
    }
    public String deleteEndroit(long id){
        endroitRepo.deleteById(id);
        return "endroit removed !! " + id;
    }
    public Endroit updateEndroit(Endroit endroit){
        Endroit endroit_ex=endroitRepo.findById(endroit.getId()).orElse(null);
        assert endroit_ex != null;
        endroit_ex.setReference(endroit.getReference());
        endroit_ex.setRuches(endroit.getRuches());
        return endroitRepo.save(endroit_ex);
    }
}
