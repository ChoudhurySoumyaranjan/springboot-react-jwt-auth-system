package com.soumya.main.controller;

import com.soumya.main.entity.User;
import com.soumya.main.exception.UserNotFoundException;
import com.soumya.main.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private UserService userService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public ResponseEntity<?> getAllEmployees() throws UserNotFoundException {

        List<User> users = userService.getAllUsers();
        if(users !=null){
            return ResponseEntity.ok(users);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/loadUser/{id}")
    public ResponseEntity<?> findEmployeeById(@PathVariable Long id) throws UserNotFoundException {
        return new ResponseEntity<>(userService.findUser(id),HttpStatus.OK);
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable("id")Long id, @RequestBody User user) throws UserNotFoundException {
        User updatedUser = userService.updateUser(id, user);
        return new ResponseEntity<>(updatedUser,HttpStatus.ACCEPTED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id")Long id)throws UserNotFoundException {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
