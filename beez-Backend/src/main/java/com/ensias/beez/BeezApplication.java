package com.ensias.beez;

import com.ensias.beez.entity.*;
import com.ensias.beez.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.annotation.PostConstruct;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;
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

	    Admin admin1 = new Admin(0,"..","...","....",65824);
	    Agent agent1 = new Agent(0,"JK005691","brahim ABDO","abdo@gmail.com",65845);
	    adminRepository.save(admin1);
        agentRepository.save(agent1);
		List<User> users = Stream.of(
				new User(102, admin1.getEmail(), admin1.getCin(), admin1.getEmail()),
				new User(103, "user2", "pwd2", "user2@gmail.com"),
                new User(103, "user3", agent1.getCin(), agent1.getEmail())
		).collect(Collectors.toList());
		repository.saveAll(users);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
			Endroit endroit1 = new Endroit("Benslimane Centre");
			Endroit endroit2 = new Endroit("Mellila Centre, proche de benslimane");
			endroitRepo.save(endroit1);
			endroitRepo.save(endroit2);
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
			Date date = simpleDateFormat.parse("2020-08-04 19:37");
			Ruche r1 = new Ruche("RIRHQIL1",date,endroit1);
			Ruche r2 = new Ruche("RYXSYB2",date,endroit2);
			Ruche r3 = new Ruche("ROPMHN3",date,endroit1);
			Ruche r4 = new Ruche("RAWREIV4",date,endroit2);
			Ruche r5 = new Ruche("RZDKNJ5",date,endroit1);
			Ruche r6 = new Ruche("RUNJKUS6",date,endroit2);
			rucheRepo.save(r1);
			rucheRepo.save(r2);
			rucheRepo.save(r3);
			rucheRepo.save(r4);
			rucheRepo.save(r5);
			rucheRepo.save(r6);
			for(int i=1;i<10;i++){
				Random rand = new Random();
				long rangebegin = Timestamp.valueOf("2020-01-01 00:00:00").getTime();
				long rangeend = Timestamp.valueOf("2020-12-12 00:58:00").getTime();
				long diff = rangeend - rangebegin + 1;
				Timestamp randdt = new Timestamp(rangebegin + (long)(Math.random() * diff));
				tempRepo.save(new TempSensor("TM01", Math.round((rand.nextInt(40)+i)*100)/100.0d, randdt, r1));
				tempRepo.save(new TempSensor("TM02", Math.round((rand.nextInt(36))*100)/100.0d, randdt, r2));
				tempRepo.save(new TempSensor("TM03", Math.round((rand.nextInt(27))*100)/100.0d, randdt, r3));
				tempRepo.save(new TempSensor("TM04", Math.round((rand.nextInt(40)+i)*100)/100.0d, randdt, r4));
				tempRepo.save(new TempSensor("TM05", Math.round((rand.nextInt(36))*100)/100.0d, randdt, r5));
				tempRepo.save(new TempSensor("TM06", Math.round((rand.nextInt(27))*100)/100.0d, randdt, r6));
				trafficRepo.save(new TrafficSensor("TF01", Math.round((rand.nextInt(40)*i)*1000)/1000.0d, randdt, r1));
				trafficRepo.save(new TrafficSensor("TF02", Math.round((rand.nextInt(12)*i)*1000)/1000.0d, randdt, r2));
				trafficRepo.save(new TrafficSensor("TF03", Math.round((rand.nextInt(55)*i)*1000)/1000.0d, randdt, r3));
				trafficRepo.save(new TrafficSensor("TF04", Math.round((rand.nextInt(40)*i)*1000)/1000.0d, randdt, r4));
				trafficRepo.save(new TrafficSensor("TF05", Math.round((rand.nextInt(12)*i)*1000)/1000.0d, randdt, r5));
				trafficRepo.save(new TrafficSensor("TF06", Math.round((rand.nextInt(55)*i)*1000)/1000.0d, randdt, r6));
				weightRepo.save(new WeightSensor("WS01", Math.round((rand.nextInt(9)*i)*100)/100.0d, randdt, r1));
				weightRepo.save(new WeightSensor("WS02", Math.round((rand.nextInt(12)*i)*100)/100.0d, randdt, r2));
				weightRepo.save(new WeightSensor("WS03", Math.round((rand.nextInt(15)*i)*100)/100.0d, randdt, r3));
				weightRepo.save(new WeightSensor("WS04", Math.round((rand.nextInt(9)*i)*100)/100.0d, randdt, r4));
				weightRepo.save(new WeightSensor("WS05", Math.round((rand.nextInt(12)*i)*100)/100.0d, randdt, r5));
				weightRepo.save(new WeightSensor("WS06", Math.round((rand.nextInt(15)*i)*100)/100.0d, randdt, r6));
			}



		};}
}
