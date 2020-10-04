package com.ensias.beez.service;

import com.ensias.beez.entity.Agent;
import com.ensias.beez.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgentService {
    @Autowired
    private AgentRepository agentRepository;
    public Agent saveAgent(Agent agent){
        return agentRepository.save(agent);
    }
    public List<Agent> saveAgents(List<Agent> agents){
        return (List<Agent>) agentRepository.saveAll(agents);
    }
    public List<Agent> getAgents(){
        return (List<Agent>) agentRepository.findAll();
    }
    public Agent getAgentById(long id){
        return agentRepository.findById(id).orElse(null);
    }
    public Agent getAgentByFullName(String name){
        return agentRepository.findByFullName(name);
    }
    public Agent getAgentByCin(String cin){
        return agentRepository.findByCin(cin);
    }
    public String deleteAgent(long id){
        agentRepository.deleteById(id);
        return "Agent removed !! " + id;
    }
    public Agent updateAgent(Agent agent){
        Agent agent_ex=agentRepository.findById(agent.getId()).orElse(null);
        agent_ex.setFullName(agent.getFullName());
        agent_ex.setEmail(agent.getEmail());
        agent_ex.setCin(agent.getCin());
        agent_ex.setCnssNum(agent.getCnssNum());
        return agentRepository.save(agent_ex);
    }
}
