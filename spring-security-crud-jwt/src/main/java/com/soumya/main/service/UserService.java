package com.soumya.main.service;

import com.soumya.main.entity.User;
import com.soumya.main.exception.UserNotFoundException;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface UserService {
     List<User> getAllUsers();
     Optional<User> addUser(User user) throws IOException;
     void deleteUser(Long id) throws UserNotFoundException;
     User findUser(Long id) throws UserNotFoundException;
     User updateUser(Long id, User user) throws UserNotFoundException;

     Optional<User> getUserByEmail(String email);
}
