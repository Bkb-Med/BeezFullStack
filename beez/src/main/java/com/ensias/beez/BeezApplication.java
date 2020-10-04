package com.ensias.beez;

import com.ensias.beez.entity.*;
import com.ensias.beez.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.annotation.PostConstruct;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@SpringBootApplication
public class BeezApplication {
	@Autowired
	private EndroitRepo endroitRepo;
	@Autowired
	RucheRepo rucheRepo ;
	@Autowired
	TempRepo tempRepo;
	@Autowired
	TrafficRepo trafficRepo;
	@Autowired
	WeightRepo weightRepo;
	public static void main(String[] args) {
		SpringApplication.run(BeezApplication.class, args);
	}
	@Autowired
	private UserRepository repository;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private  AgentRepository agentRepository;
	@PostConstruct
	public void initUsers() {

	    Admin admin1 = new Admin(0,"GB162360","Mhamed Boukbab","Boukbab.med@gmail.com",65824);
	    Agent agent1 = new Agent(0,"JK005691","brahim ABDO","abdo@gmail.com",65845);
	    adminRepository.save(admin1);
        agentRepository.save(agent1);
		List<User> users = Stream.of(
				new User(102, "user1", admin1.getCin(), admin1.getEmail()),
				new User(103, "user2", "pwd2", "user2@gmail.com"),
                new User(103, "user3", agent1.getCin(), agent1.getEmail())
		).collect(Collectors.toList());
		repository.saveAll(users);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
			Endroit endroit1 = new Endroit("Benslimane Centre");
			Endroit endroit2 = new Endroit("Mellila Centre");
			endroitRepo.save(endroit1);
			endroitRepo.save(endroit2);
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
			Date date = simpleDateFormat.parse("2020-08-04 19:37");
			Ruche r1 = new Ruche("R001",date,endroit1);
			Ruche r2 = new Ruche("R002",date,endroit2);
			Ruche r3 = new Ruche("R003",date,endroit1);
			Ruche r4 = new Ruche("R004",date,endroit2);
			Ruche r5 = new Ruche("R005",date,endroit1);
			Ruche r6 = new Ruche("R006",date,endroit2);
			rucheRepo.save(r1);
			rucheRepo.save(r2);
			rucheRepo.save(r3);
			rucheRepo.save(r4);
			rucheRepo.save(r5);
			rucheRepo.save(r6);
			for(int i=0;i<10;i++){
				tempRepo.save(new TempSensor("TM01", 6.0+i, date, r1));
				tempRepo.save(new TempSensor("TM02", 2.2*i, date, r2));
				tempRepo.save(new TempSensor("TM03", 2.2*i+10.5, date, r3));

				trafficRepo.save(new TrafficSensor("TF01", 10*i, date, r1));
				trafficRepo.save(new TrafficSensor("TF02", 20*i, date, r2));
				trafficRepo.save(new TrafficSensor("TF03", 16*i, date, r3));

				weightRepo.save(new WeightSensor("WS01", 10*i, date, r1));
				weightRepo.save(new WeightSensor("WS02", 8*i, date, r2));
				weightRepo.save(new WeightSensor("WS03", 6*i, date, r3));
			}



		};}
}
