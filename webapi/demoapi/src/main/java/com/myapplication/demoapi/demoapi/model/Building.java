package com.myapplication.demoapi.demoapi.model;

public class Building {
    public int siteId;
    public int buildingId;
    public String primaryUse;
    public int squareFeet;
    public int yearBuilt;
    public int floorCount;

    public Building() {
    }

    public Building(int siteId, int buildingId, String primaryUse, int squareFeet, int yearBuilt, int floorCount) {
        this.siteId = siteId;
        this.buildingId = buildingId;
        this.primaryUse = primaryUse;
        this.squareFeet = squareFeet;
        this.yearBuilt = yearBuilt;
        this.floorCount = floorCount;
    }

    public int getSiteId() {
        return siteId;
    }

    public void setSiteId(int siteId) {
        this.siteId = siteId;
    }

    public int getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(int buildingId) {
        this.buildingId = buildingId;
    }

    public String getPrimaryUse() {
        return primaryUse;
    }

    public void setPrimaryUse(String primaryUse) {
        this.primaryUse = primaryUse;
    }

    public int getSquareFeet() {
        return squareFeet;
    }

    public void setSquareFeet(int squareFeet) {
        this.squareFeet = squareFeet;
    }

    public int getYearBuilt() {
        return yearBuilt;
    }

    public void setYearBuilt(int yearBuilt) {
        this.yearBuilt = yearBuilt;
    }

    public int getFloorCount() {
        return floorCount;
    }

    public void setFloorCount(int floorCount) {
        this.floorCount = floorCount;
    }
}
