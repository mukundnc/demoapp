package com.myapplication.demoapi.demoapi.repository;

import com.myapplication.demoapi.demoapi.model.Person;
import com.myapplication.demoapi.demoapi.model.PersonRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource(exported = true)
@Repository
public interface UserRoleRepository extends JpaRepository<PersonRole, Integer> {
    List<PersonRole> findByPersonId(Integer personId);
}
