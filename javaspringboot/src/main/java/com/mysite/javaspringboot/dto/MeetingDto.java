package com.mysite.javaspringboot.dto;

import java.time.LocalDateTime;
import java.util.Set;

public class MeetingDto {
    private Long id;
    private String title;
    private LocalDateTime scheduledAt;
    private Set<Long> participantIds; // ⬅️ זה חייב להיות קיים

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public LocalDateTime getScheduledAt() { return scheduledAt; }
    public void setScheduledAt(LocalDateTime scheduledAt) { this.scheduledAt = scheduledAt; }

    public Set<Long> getParticipantIds() { return participantIds; }
    public void setParticipantIds(Set<Long> participantIds) { this.participantIds = participantIds; }
}
