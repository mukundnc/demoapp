package com.myapplication.demoapi.demoapi.service;

import com.myapplication.demoapi.demoapi.model.Building;
import com.myapplication.demoapi.demoapi.repository.EnergyDataRepository;
import com.myapplication.demoapi.demoapi.repository.SnowFlakeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class SnowFlakeService {
    private final SnowFlakeRepository repository;
    private final EnergyDataRepository energyDataRepo;
    Logger logger = LoggerFactory.getLogger(EnergyDataRepository.class);
    @Autowired
    public SnowFlakeService(SnowFlakeRepository repository, EnergyDataRepository energyDataRepo){
        this.repository = repository;
        this.energyDataRepo = energyDataRepo;
    }

    public boolean LoadData(){
        String tableName;
        String filePath;
        try {
            tableName = "building_metadata";
            filePath = "C:\\Work\\demoapp\\webapi\\demoapi\\data\\building_metadata.csv";
            this.repository.LoadCsv(tableName, filePath);
            tableName = "meter_type";
            filePath = "C:\\Work\\demoapp\\webapi\\demoapi\\data\\meter_type.csv";
            this.repository.LoadCsv(tableName, filePath);
            tableName = "train";
            filePath = "C:\\Work\\demoapp\\webapi\\demoapi\\data\\train.csv";
            this.repository.LoadCsv(tableName, filePath);
            tableName = "weather_train";
            filePath = "C:\\Work\\demoapp\\webapi\\demoapi\\data\\weather_train.csv";
            this.repository.LoadCsv(tableName, filePath);
            return true;
        }
        catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        return false;
    }

    public List<Building> GetBuildingData(){
        try {
            energyDataRepo.CreateConnection();
            var result = energyDataRepo.GetSitesInformation();
            energyDataRepo.CloseConnection();
            return result;
        } catch (SQLException e) {
            logger.error(e.getMessage());
            return null;
        }
    }
}
