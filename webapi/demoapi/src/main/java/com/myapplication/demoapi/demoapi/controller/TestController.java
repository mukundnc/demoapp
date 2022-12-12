package com.myapplication.demoapi.demoapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/")
	public String[] index() {
		return new String[]{"Greetings", "from", "Spring", "Boot!"};
	}
    
}
