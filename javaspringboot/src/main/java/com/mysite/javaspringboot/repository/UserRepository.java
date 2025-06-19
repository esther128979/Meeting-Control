package com.mysite.javaspringboot.repository;

import com.mysite.javaspringboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
