package com.myapplication.demoapi.demoapi.model;

public enum AppointmentStatus {
    Pending("Pending"), Accepted("Accepted"), Cancelled("Cancelled"), Rejected("Rejected"), NoShow("NoShow"), Completed("Completed") ;
    private String name;

    public String getName() {
        return name;
    }

    AppointmentStatus(String name) {
        this.name = name;
    }
}
