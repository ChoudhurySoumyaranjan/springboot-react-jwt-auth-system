package com.soumya.main.repository;

import com.soumya.main.entity.Todo;
import com.soumya.main.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
//@Transactional
public interface TodoRepository extends JpaRepository<Todo, Long> {

    List<Todo> findByUser(User user);
}
