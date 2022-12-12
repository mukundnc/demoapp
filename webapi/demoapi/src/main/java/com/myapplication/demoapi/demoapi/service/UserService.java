package com.myapplication.demoapi.demoapi.service;

import com.myapplication.demoapi.demoapi.model.Person;
import com.myapplication.demoapi.demoapi.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    private UserRepository repository;

    @Autowired
    public UserService(UserRepository repository){
        this.repository = repository;
    }

    public Iterable<Person> GetUsers(){
        Iterable<Person> result = repository.findAll();
        return result;
    }
}
