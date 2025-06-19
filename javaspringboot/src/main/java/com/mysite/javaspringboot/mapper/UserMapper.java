package com.mysite.javaspringboot.mapper;

import com.mysite.javaspringboot.dto.UserDto;
import com.mysite.javaspringboot.model.Meeting;
import com.mysite.javaspringboot.model.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    private final ModelMapper modelMapper;

    public UserMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public UserDto toDto(User user) {
        UserDto dto = modelMapper.map(user, UserDto.class);

        // ⬅️ כאן ממירים את רשימת הפגישות ל־Set של מזהים
        if (user.getMeetings() != null) {
            Set<Long> meetingIds = user.getMeetings().stream()
                    .map(Meeting::getId)
                    .collect(Collectors.toSet());
            dto.setMeetingIds(meetingIds);
        }

        return dto;
    }

    public User toEntity(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }
}
