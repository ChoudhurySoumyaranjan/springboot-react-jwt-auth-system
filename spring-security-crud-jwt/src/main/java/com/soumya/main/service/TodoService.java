package com.soumya.main.service;

import com.soumya.main.entity.Todo;
import com.soumya.main.exception.UserNotFoundException;

import java.util.List;

public interface TodoService {

    Todo createTodo(Long userId, Todo todo) throws UserNotFoundException;

    List<Todo> getUserTodos(Long userId) throws UserNotFoundException;

    Todo updateTodo(Long id, Todo todo);

    void deleteTodo(Long id);
}


