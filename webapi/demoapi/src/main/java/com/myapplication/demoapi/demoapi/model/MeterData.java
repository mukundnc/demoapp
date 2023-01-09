package com.myapplication.demoapi.demoapi.model;

import java.time.LocalDateTime;

public class MeterData {
    private int buildingId;
    private int meter;
    private LocalDateTime timestamp;
    private float meterReading;

    public MeterData() {
    }

    public MeterData(int buildingId, int meter, LocalDateTime timestamp, float meterReading) {
        this.buildingId = buildingId;
        this.meter = meter;
        this.timestamp = timestamp;
        this.meterReading = meterReading;
    }

    public int getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(int buildingId) {
        this.buildingId = buildingId;
    }

    public int getMeter() {
        return meter;
    }

    public void setMeter(int meter) {
        this.meter = meter;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public float getMeterReading() {
        return meterReading;
    }

    public void setMeterReading(float meterReading) {
        this.meterReading = meterReading;
    }
}
