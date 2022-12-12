package com.example.webapi.webapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/items")
public class ItemsController {

	@GetMapping("/")
	public String[] index() {
		return new String[]{"Greetings", "from", "Spring", "Boot!"};
	}

}
