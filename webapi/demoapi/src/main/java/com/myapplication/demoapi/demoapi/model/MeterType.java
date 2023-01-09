package com.myapplication.demoapi.demoapi.model;

public class MeterType {
    private int meterId;
    private String name;

    public MeterType() {
    }

    public MeterType(int meterId, String name) {
        this.meterId = meterId;
        this.name = name;
    }

    public int getMeterId() {
        return meterId;
    }

    public void setMeterId(int meterId) {
        this.meterId = meterId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
