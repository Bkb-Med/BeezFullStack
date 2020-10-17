package com.ensias.beez.controller;

import com.ensias.beez.entity.Admin;
import com.ensias.beez.entity.Agent;
import com.ensias.beez.service.AdminService;
import com.ensias.beez.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PersonController {
    //-----------AdminController
    @Autowired
    private AdminService adminService;
    @PostMapping("/add/admin")
    public Admin addAdmin(@RequestBody Admin admin){
        return adminService.saveAdmin(admin);
    }
    @GetMapping("/admin/id/{id}")
    public Admin findAdminById(@PathVariable long id){
        return adminService.getAdminById(id);
    }
    @GetMapping("/admin/cin/{cin}")
    public Admin findAdminByCin(@PathVariable String cin){
        return adminService.getAdminByCin(cin);
    }
    @GetMapping("/admins")
    public List<Admin> findAllAdmins(){
        return adminService.getAdmins();
    }
    @GetMapping("/admin/name/{name}")
    public Admin findAdminByName(@PathVariable String name){
        return adminService.getAdminByFullName(name);
    }
    @PutMapping("/update/admin")
    public Admin updateAdmin(@RequestBody Admin admin){
        return adminService.updateAdmin(admin);
    }
    @DeleteMapping("/delete/admin/{id}")
    public String deleteAdmin(@PathVariable int id){
        return adminService.deleteAdmin(id);
    }

//-----------------AgentController-------
    @Autowired
    private AgentService agentService;
    @PostMapping("/add/agent")
    public Agent addAgent(@RequestBody Agent agent){
        return agentService.saveAgent(agent);
    }
    @GetMapping("/agent/id/{id}")
    public Agent findAgentById(@PathVariable long id){
        return agentService.getAgentById(id);
    }
    @PostMapping("/add/agents")
    public List<Agent> addAgents(@RequestBody List<Agent> agents){
        return agentService.saveAgents(agents);
    }
    @GetMapping("/agent/cin/{cin}")
    public Agent findAgentByCin(@PathVariable String cin){
        return agentService.getAgentByCin(cin);
    }
    @GetMapping("/agents")
    public List<Agent> findAllAgents(){
        return agentService.getAgents();
    }
    @GetMapping("/agent/name/{name}")
    public Agent findAgentByName(@PathVariable String name){
        return agentService.getAgentByFullName(name);
    }
    @PutMapping("/update/agent")
    public Agent updateAgent(@RequestBody Agent agent){
        return agentService.updateAgent(agent);
    }
    @DeleteMapping("/delete/agent/{id}")
    public String deleteAgent(@PathVariable int id){
        return agentService.deleteAgent(id);
    }

}

