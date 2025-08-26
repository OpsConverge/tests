// src/main/java/com/example/demo/controller/TodoController.java
package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/todos")
public class TodoController {
    private final List<String> todos = new ArrayList<>();

    @GetMapping
    public List<String> getTodos() {
        return todos;
    }

    @PostMapping
    public String addTodo(@RequestBody String task) {
        todos.add(task);
        return task;
    }
}
