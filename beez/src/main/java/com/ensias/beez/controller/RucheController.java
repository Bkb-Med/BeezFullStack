package com.ensias.beez.controller;

import com.ensias.beez.entity.Endroit;
import com.ensias.beez.entity.Ruche;
import com.ensias.beez.service.EndroitService;
import com.ensias.beez.service.RucheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class RucheController {
    //-----------EndroitController---------
    @Autowired
    private EndroitService endroitService;
    @PostMapping("/add/endroit")
    public Endroit addEndroit(@RequestBody Endroit endroit){
        return endroitService.saveEndroit(endroit);
    }
    @GetMapping("/endroit/id/{id}")
    public Endroit findEndroitById(@PathVariable long id){
        return endroitService.getEndroitById(id);
    }
    @GetMapping("/endroit/reference/{ref}")
    public Endroit findEndroitByReference(@PathVariable String ref){
        return endroitService.getEndroitByRefrence(ref);
    }
    @GetMapping("/endroits")
    public List<Endroit> findAllEndroits(){
        return endroitService.getEndroits();
    }
    @PutMapping("/update/endroit")
    public Endroit updateEndroit(@RequestBody Endroit endroit){
        return endroitService.updateEndroit(endroit);
    }
    @DeleteMapping("/delete/endroit/{id}")
    public String deleteEndroit(@PathVariable int id){
        return endroitService.deleteEndroit(id);
    }
//--------------rucheController---------------
@Autowired
private RucheService rucheService;
    @PostMapping("/add/ruche")
    public Ruche addRuche(@RequestBody Ruche ruche){
        return rucheService.saveRuche(ruche);
    }
    @GetMapping("/ruche/id/{id}")
    public Ruche findRucheById(@PathVariable long id){
        return rucheService.getRucheById(id);
    }
    @GetMapping("/ruche/reference/{ref}")
    public Ruche findRucheByCin(@PathVariable String ref){
        return rucheService.getRucheByReference(ref);
    }
    @GetMapping("/ruches")
    public List<Ruche> findRuches(){
        return rucheService.getRuches();
    }
    @PutMapping("/update/ruche")
    public Ruche updateRuche(@RequestBody Ruche ruche){
        return rucheService.updateRuche(ruche);
    }
    @DeleteMapping("/delete/ruche/{id}")
    public String deleteRuche(@PathVariable int id){
        return rucheService.deleteRuche(id);
    }
    @GetMapping("/endroit/ruches/{id}")
   public List<Ruche> findRuchesByEndroit(@PathVariable long id){
        return rucheService.getRuchesByEndroitId(id);
    }

}
