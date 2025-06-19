package com.mysite.javaspringboot.controller;

import com.mysite.javaspringboot.dto.MeetingDto;
import com.mysite.javaspringboot.service.MeetingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meetings")
public class MeetingController {

    private final MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @PostMapping
    public ResponseEntity<MeetingDto> createMeeting(@RequestBody MeetingDto meetingDto) {
        return ResponseEntity.ok(meetingService.createMeeting(meetingDto));
    }

    @GetMapping
    public ResponseEntity<List<MeetingDto>> getAllMeetings() {
        return ResponseEntity.ok(meetingService.getAllMeetings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MeetingDto> getMeeting(@PathVariable Long id) {
        return meetingService.getMeetingById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
public ResponseEntity<MeetingDto> updateMeeting(
        @PathVariable Long id,
        @RequestBody MeetingDto meetingDto) {
    return ResponseEntity.ok(meetingService.updateMeeting(id, meetingDto));
}
@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteMeeting(@PathVariable Long id) {
    meetingService.deleteMeeting(id);
    return ResponseEntity.noContent().build(); // מחזיר 204 ללא תוכן
}


}
