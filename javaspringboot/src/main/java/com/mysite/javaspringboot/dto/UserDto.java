package com.mysite.javaspringboot.dto;

import java.util.Set;

public class UserDto {
    private Long id;
    private String name;
    private Set<Long> meetingIds;

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
   

}
