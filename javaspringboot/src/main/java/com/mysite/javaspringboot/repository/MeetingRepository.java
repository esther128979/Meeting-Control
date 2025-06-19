package com.mysite.javaspringboot.repository;

import com.mysite.javaspringboot.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {
}
