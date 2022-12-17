package com.myapplication.demoapi.demoapi;

import com.myapplication.demoapi.demoapi.model.*;
import com.myapplication.demoapi.demoapi.repository.UserRepository;
import com.myapplication.demoapi.demoapi.repository.UserRoleRepository;
import com.myapplication.demoapi.demoapi.repository.AppointmentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Configuration
public class Config {
    Logger logger = LoggerFactory.getLogger(Config.class);
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository, UserRoleRepository roleRepository, AppointmentRepository appointmentRepository){
        return args -> {
            try {
                Person patient = new Person("patient", "no 1", "patient@demo.com", "9999999991", LocalDate.of(1980, 4, 1));
                Person doctor = new Person("doctor ", "no 1", "doctor@demo.com", "9999999992", LocalDate.of(1984, 2, 29));
                Person admin = new Person("admin", "no", "admin@demo.com", "9999999993", LocalDate.of(2002, 2, 2));
                var res1 = repository.save(patient);
                var res2 = repository.save(doctor);
                var res3 = repository.save(admin);
                var role1 = roleRepository.save(new PersonRole(Roles.Patient, res1));
                var role2 = roleRepository.save(new PersonRole(Roles.Doctor, res2));
                var role3 = roleRepository.save(new PersonRole(Roles.Admin, res3));
                var appointment = appointmentRepository.save(new Appointment(LocalDateTime.of(2022, 12, 15, 12, 30),
                        patient, doctor, AppointmentStatus.Pending, LocalDateTime.now()));
                res1.setRoles(List.of(role1));
                res2.setRoles(List.of(role2));
                res3.setRoles(List.of(role3));
                res1.setAppointmentsP(List.of(appointment));
                res2.setAppointmentsD(List.of(appointment));
                repository.saveAll(List.of(res1, res2, res3));
            }
            catch (Exception ex){
                logger.error(ex.getMessage());
            }
        };
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000/")
                        .allowedMethods("*");
            }
        };
    }
}
