// src/test/java/com/example/demo/integration/TodoIntegrationTest.java
package com.example.demo.integration;

import com.example.demo.controller.TodoController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class TodoIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testTodoEndpoints() throws Exception {
        mockMvc.perform(post("/todos").content("Write tests"))
                .andExpect(status().isOk());

        mockMvc.perform(get("/todos"))
                .andExpect(status().isOk())
                .andExpect(content().string(org.hamcrest.Matchers.containsString("Write tests")));
    }
}
