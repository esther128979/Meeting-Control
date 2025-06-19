package com.mysite.javaspringboot.service;

import com.mysite.javaspringboot.dto.MeetingDto;
import com.mysite.javaspringboot.mapper.MeetingMapper;
import com.mysite.javaspringboot.model.Meeting;
import com.mysite.javaspringboot.model.User;
import com.mysite.javaspringboot.repository.MeetingRepository;
import com.mysite.javaspringboot.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MeetingService {

    private final MeetingRepository meetingRepository;
    private final UserRepository userRepository;
    private final MeetingMapper meetingMapper;

    public MeetingService(MeetingRepository meetingRepository, UserRepository userRepository,
            MeetingMapper meetingMapper) {
        this.meetingRepository = meetingRepository;
        this.userRepository = userRepository;
        this.meetingMapper = meetingMapper;
    }

    public MeetingDto createMeeting(MeetingDto meetingDto) {
        Meeting meeting = meetingMapper.toEntity(meetingDto);

        // שליפת המשתתפים לפי מזהים
        if (meetingDto.getParticipantIds() != null) {
            HashSet<User> participants = new HashSet<>(
                    userRepository.findAllById(meetingDto.getParticipantIds()));
            meeting.setParticipants(participants);
        }

        Meeting savedMeeting = meetingRepository.save(meeting);
        return meetingMapper.toDto(savedMeeting);
    }

    public void deleteMeeting(Long id) {
        meetingRepository.deleteById(id);
    }

    public List<MeetingDto> getAllMeetings() {
        return meetingRepository.findAll()
                .stream()
                .map(meetingMapper::toDto)
                .collect(Collectors.toList());
    }

    public Optional<MeetingDto> getMeetingById(Long id) {
        return meetingRepository.findById(id)
                .map(meetingMapper::toDto);
    }

    public MeetingDto updateMeeting(Long id, MeetingDto meetingDto) {
        Meeting meeting = meetingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Meeting not found"));

        meeting.setTitle(meetingDto.getTitle());
        meeting.setScheduledAt(meetingDto.getScheduledAt());

        if (meetingDto.getParticipantIds() != null) {
            Set<User> participants = new HashSet<>(
                    userRepository.findAllById(meetingDto.getParticipantIds()));
            meeting.setParticipants(participants);
        }

        Meeting updated = meetingRepository.save(meeting);
        return meetingMapper.toDto(updated);

    }

}
