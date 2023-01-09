package com.myapplication.demoapi.demoapi.controller;

import com.myapplication.demoapi.demoapi.model.Building;
import com.myapplication.demoapi.demoapi.model.LineItem;
import com.myapplication.demoapi.demoapi.repository.EnergyDataRepository;
import com.myapplication.demoapi.demoapi.repository.SnowFlakeRepository;
import com.myapplication.demoapi.demoapi.service.SnowFlakeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/snowflake")
public class SnowflakeController {

	private SnowFlakeRepository repo;
	private SnowFlakeService service;
	private EnergyDataRepository energyDataRepo;
	public SnowflakeController(SnowFlakeRepository repo, SnowFlakeService service){
		this.repo = repo;
		this.service = service;
	}

    @GetMapping("/")
	public List<LineItem> index() throws SQLException {
		return repo.GetLineItems();
	}

	@GetMapping("/loaddata")
	public String loadData(){
		var result = this.service.LoadData();
		if(result)
			return "Successfully Loaded Data";
		else
			return "Failed to Load Data";
	}

	@GetMapping("/buildingData")
	public List<Building> getBuildingData(){
		return this.service.GetBuildingData();
	}
    
}
