package com.backend.Recipe.service;

import java.util.List;

import com.backend.Recipe.entity.User;

public interface UserService {
    User saveUser(User user);

    User findByUsername(String username);

    List<User> findAllUsers();
}
