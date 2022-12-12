package com.myapplication.demoapi.demoapi.model;

import javax.persistence.*;

import java.time.LocalDate;
import java.time.Period;
import java.time.Year;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Person {
    @Id
    @GeneratedValue
    @SequenceGenerator(
        name = "user_sequence",
        sequenceName = "user_sequence",
        allocationSize = 1
    )
    private Integer id;

    private String firstName;

    private String lastName;

    @Column(unique = true)
    private String email;

    private String phoneNumber;

    private LocalDate dateOfBirth;

    @Transient
    private Integer age;

    @OneToMany(mappedBy = "person")
    private List<PersonRole> roles;

    public Person(){

    }
    
    public Person(
        String firstName, 
        String lastName, 
        String email, 
        String phoneNumber, 
        LocalDate dateOfBirth,
        List<PersonRole> roles
        ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.dateOfBirth = dateOfBirth;
            this.roles = roles;
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }
    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public String getEmail(){
        return email;
    }

    public String getPhoneNumber(){
        return phoneNumber;
    }

    public LocalDate getDateOfBirth(){
        return dateOfBirth;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    public void setDateOfBirth(LocalDate dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getAge(){
        return Period.between(dateOfBirth, LocalDate.now()).getYears();
    }

    public List<PersonRole> getRoles(){
        return roles;
    }

    public void  setRoles(List<PersonRole> roles){
        this.roles = roles;
    }

}
