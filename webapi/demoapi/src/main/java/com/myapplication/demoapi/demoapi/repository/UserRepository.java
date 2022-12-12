package com.myapplication.demoapi.demoapi.repository;

import com.myapplication.demoapi.demoapi.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(exported = true)
@Repository
public interface UserRepository extends CrudRepository<Person, Integer> {
}
