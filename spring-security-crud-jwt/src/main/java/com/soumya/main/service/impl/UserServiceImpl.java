package com.soumya.main.service.impl;

import com.soumya.main.entity.User;
import com.soumya.main.exception.UserNotFoundException;
import com.soumya.main.repository.UserRepository;
import com.soumya.main.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> addUser(User user) {

        User savedUser = userRepository.save(user);
        if (ObjectUtils.isEmpty(savedUser)){
            return Optional.empty();
        }
        return Optional.of(savedUser);
    }

    @Override
    public void deleteUser(Long id) throws UserNotFoundException {
        User user = userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException("User you want to delete is not Present in DB"));
        userRepository.delete(user);
    }

    @Override
    public User findUser(Long id) throws UserNotFoundException {
        User user = userRepository.findById(id).orElseThrow(()-> new UserNotFoundException("No User Found with this Id"));
        return user;
    }

    @Override
    public User updateUser(Long id, User user) throws UserNotFoundException {
        User existingUser= userRepository.findById(id).orElseThrow(()->new UserNotFoundException("No Employees Found"));
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setPhoneNumber(user.getPhoneNumber());

        if (!existingUser.getEmail().equals(user.getEmail())) {
            if (userRepository.findByEmail(user.getEmail()).isPresent()) {
                throw new RuntimeException("Email already in use");
            }
            existingUser.setEmail(user.getEmail());
        }
        return userRepository.save(existingUser);
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
