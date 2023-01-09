package com.myapplication.demoapi.demoapi.repository;

import com.myapplication.demoapi.demoapi.contract.IEnergyDataRepository;
import com.myapplication.demoapi.demoapi.model.Building;
import com.myapplication.demoapi.demoapi.model.MeterData;
import com.myapplication.demoapi.demoapi.model.MeterType;
import com.myapplication.demoapi.demoapi.model.WeatherData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

@Repository
public class EnergyDataRepository implements IEnergyDataRepository {
    @Value("${snowflake.url}")
    private String jdbcUrl;
    @Value("${snowflake.user}")
    private String username;
    @Value("${snowflake.password}")
    private String password;
    @Value("${snowflake.database}")
    private String database;
    @Value("${snowflake.warehouse}")
    private String warehouse;
    @Value("${snowflake.role}")
    private String role;
    Connection connection;
    Logger logger = LoggerFactory.getLogger(EnergyDataRepository.class);
    @Override
    public void CreateConnection() throws SQLException {
        var props = new Properties();
        props.put("user", username);
        props.put("password", password);
        props.put("db", database);
        props.put("warehouse", warehouse);
        props.put("role", role);
        this.connection = DriverManager.getConnection(jdbcUrl, props);
    }

    @Override
    public void CloseConnection() throws SQLException {
        this.connection.close();
    }

    @Override
    public List<Building> GetSitesInformation() {
        try {
            var statement = this.connection.createStatement();
            var resultSet = statement.executeQuery("SELECT * FROM BUILDING_METADATA");
            var result = new ArrayList<Building>();
            while (resultSet.next()) {
                var building = new Building();
                building.buildingId = resultSet.getInt("BUILDING_ID");
                building.siteId = resultSet.getInt("SITE_ID");
                building.primaryUse = resultSet.getString("PRIMARY_USE");
                building.squareFeet = resultSet.getInt("SQUARE_FEET");
                building.yearBuilt = resultSet.getInt("YEAR_BUILT");
                building.floorCount = resultSet.getInt("FLOOR_COUNT");
                result.add(building);
            }
            return result;
        }
        catch (Exception ex){
            logger.error(ex.getMessage());
            return null;
        }
    }

    @Override
    public List<MeterType> GetMeterTypes() {
        return null;
    }

    @Override
    public List<MeterData> GetMeterReadings() {
        return null;
    }

    @Override
    public List<WeatherData> GetWeatherData() {
        return null;
    }
}
