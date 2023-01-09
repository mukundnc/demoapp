package com.myapplication.demoapi.demoapi.contract;

import com.myapplication.demoapi.demoapi.model.Building;
import com.myapplication.demoapi.demoapi.model.MeterData;
import com.myapplication.demoapi.demoapi.model.MeterType;
import com.myapplication.demoapi.demoapi.model.WeatherData;

import java.sql.SQLException;
import java.util.List;

public interface IEnergyDataRepository {
    public void CreateConnection() throws SQLException;
    public void CloseConnection() throws SQLException;
    public List<Building> GetSitesInformation();
    public List<MeterType> GetMeterTypes();
    public List<MeterData> GetMeterReadings();
    public List<WeatherData> GetWeatherData();
}
