package com.myapplication.demoapi.demoapi.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "bookTime", "doctor_id" }) })
public class Appointment {
    @Id
    @GeneratedValue
    @SequenceGenerator(
            name = "appointment_sequence",
            sequenceName = "appointment_sequence",
            allocationSize = 1
    )
    private Integer id;
    private LocalDateTime bookTime;
    @ManyToOne
    @JoinColumn(name="patient_id")
    private Person patient;
    @ManyToOne
    @JoinColumn(name="doctor_id")
    private Person doctor;
    private AppointmentStatus status;
    private LocalDateTime lastUpdatedTime;

    public Appointment(){

    }
    public Appointment(LocalDateTime bookTime, Person patient, Person doctor, AppointmentStatus status, LocalDateTime lastUpdatedTime) {
        this.bookTime = bookTime;
        this.patient = patient;
        this.doctor = doctor;
        this.status = status;
        this.lastUpdatedTime = lastUpdatedTime;
    }

    public LocalDateTime getBookTime() {
        return bookTime;
    }

    public void setBookTime(LocalDateTime bookTime) {
        this.bookTime = bookTime;
    }

    public Person getPatient() {
        return patient;
    }

    public void setPatient(Person patient) {
        this.patient = patient;
    }

    public Person getDoctor() {
        return doctor;
    }

    public void setDoctor(Person doctor) {
        this.doctor = doctor;
    }

    public AppointmentStatus getStatus() {
        return status;
    }

    public void setStatus(AppointmentStatus status) {
        this.status = status;
    }

    public LocalDateTime getLastUpdatedTime() {
        return lastUpdatedTime;
    }

    public void setLastUpdatedTime(LocalDateTime lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
    }

}
