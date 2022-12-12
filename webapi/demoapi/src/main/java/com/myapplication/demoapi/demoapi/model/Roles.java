package com.myapplication.demoapi.demoapi.model;

public enum Roles {
    Patient("Patient"), Doctor("Doctor"), Admin("Admin");
    private String name;

    public String getName() {
        return name;
    }

    Roles(String name) {
        this.name = name;
    }
}
