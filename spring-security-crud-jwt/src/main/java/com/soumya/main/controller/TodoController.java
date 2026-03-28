package com.soumya.main.controller;

import com.soumya.main.entity.Todo;
import com.soumya.main.exception.UserNotFoundException;
import com.soumya.main.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    // Create
    @PostMapping("/{userId}")
    public Todo createTodo(@PathVariable Long userId, @RequestBody Todo todo) throws UserNotFoundException {
        return todoService.createTodo(userId, todo);
    }

    // Get all user todos
    @GetMapping("/{userId}")
    public List<Todo> getTodos(@PathVariable Long userId) throws UserNotFoundException {
        return todoService.getUserTodos(userId);
    }

    // Update
    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
        return todoService.updateTodo(id, todo);
    }

    // Delete
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
    }
}