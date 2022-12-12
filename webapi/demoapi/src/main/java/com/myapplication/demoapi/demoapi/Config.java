package com.myapplication.demoapi.demoapi;

import com.myapplication.demoapi.demoapi.model.Person;
import com.myapplication.demoapi.demoapi.model.PersonRole;
import com.myapplication.demoapi.demoapi.model.Roles;
import com.myapplication.demoapi.demoapi.repository.UserRepository;
import com.myapplication.demoapi.demoapi.repository.UserRoleRepository;
import org.apache.catalina.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class Config {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository, UserRoleRepository roleRepository){
        return args -> {
            Person person = new Person("mukund", "nc", "muk@nc.com", "9049002215", LocalDate.of( 1983, 4, 22), Arrays.asList());
            var result = repository.save(person);
            List<PersonRole> roles = Arrays.asList(
                    new PersonRole(Roles.Patient, result),
                    new PersonRole(Roles.Doctor, result),
                    new PersonRole(Roles.Admin, result)
            );
            roleRepository.saveAll(roles);
        };
    }
}
