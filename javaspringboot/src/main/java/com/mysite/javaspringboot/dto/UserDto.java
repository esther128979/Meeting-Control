package com.mysite.javaspringboot.dto;

import java.util.Set;

public class UserDto {
    private Long id;
    private String name;
    private Set<Long> meetingIds;
    private String email;

    // 🔹 Getters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Set<Long> getMeetingIds() {
        return meetingIds;
    }

    public String getEmail() {
        return email;
    }

    // 🔹 Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMeetingIds(Set<Long> meetingIds) {
        this.meetingIds = meetingIds;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
