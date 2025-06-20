package com.mysite.javaspringboot.model;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    @ManyToMany(mappedBy = "participants")
    private Set<Meeting> meetings = new HashSet<>();

    // getters & setters
    public String getName() {
    return name;



    
}
public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public void setName(String name) {
    this.name = name;
}

public Long getId() { return id; }
public void setId(Long id) { this.id = id; }
public Set<Meeting> getMeetings() {
    return meetings;
}

public void setMeetings(Set<Meeting> meetings) {
    this.meetings = meetings;
}



}
