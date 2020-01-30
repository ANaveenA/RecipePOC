package com.backend.Recipe.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.Recipe.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
}
