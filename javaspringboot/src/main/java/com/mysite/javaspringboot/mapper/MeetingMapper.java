package com.mysite.javaspringboot.mapper;

import com.mysite.javaspringboot.dto.MeetingDto;
import com.mysite.javaspringboot.model.Meeting;
import com.mysite.javaspringboot.model.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.stream.Collectors;

@Component
public class MeetingMapper {

    private final ModelMapper modelMapper;

    public MeetingMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public MeetingDto toDto(Meeting meeting) {
        MeetingDto dto = modelMapper.map(meeting, MeetingDto.class);

        // מיפוי המשתתפים ל־participantIds
        if (meeting.getParticipants() != null) {
            Set<Long> participantIds = meeting.getParticipants().stream()
                    .map(User::getId)
                    .collect(Collectors.toSet());
            dto.setParticipantIds(participantIds);
        } else {
            dto.setParticipantIds(Set.of()); // לוודא שלא חוזר null
        }

        return dto;
    }

    public Meeting toEntity(MeetingDto dto) {
        return modelMapper.map(dto, Meeting.class);
    }
}
