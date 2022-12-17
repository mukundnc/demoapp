package com.myapplication.demoapi.demoapi.repository;

import com.myapplication.demoapi.demoapi.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource(exported = true)
@Repository
public interface UserRepository extends JpaRepository<Person, Integer> {
    List<Person> findByEmail(String email);
}
