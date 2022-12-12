package com.myapplication.demoapi.demoapi.model;

import javax.persistence.*;

@Entity
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "role", "person_id" }) })
public class PersonRole {
    @Id
    @GeneratedValue
    @SequenceGenerator(
            name = "user_role_sequence",
            sequenceName = "user_role_sequence",
            allocationSize = 1
    )
    private Integer id;

    @ManyToOne
    @JoinColumn(name="person_id")
    private Person person;

    @Enumerated
    private Roles role;

    public  PersonRole(){

    }
    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }
    public PersonRole(Roles role, Person person){
        this.role = role;
        this.person = person;
    }

    public Roles getRole(){
        return role;
    }

    public Person getPerson(){
        return person;
    }

    public void setRole(Roles role){
        this.role = role;
    }

    public void setPerson(Person person){
        this.person = person;
    }

}
