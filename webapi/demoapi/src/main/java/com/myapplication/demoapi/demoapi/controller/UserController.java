package com.myapplication.demoapi.demoapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapplication.demoapi.demoapi.model.Person;
import com.myapplication.demoapi.demoapi.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserService service;

    public UserController(UserService service){
        this.service = service;
    }

    @GetMapping("/")
    public Iterable<Person> GetUsers(){
        return service.GetUsers();
    }

}
