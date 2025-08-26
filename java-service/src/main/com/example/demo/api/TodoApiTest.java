// src/test/java/com/example/demo/api/TodoApiTest.java
package com.example.demo.api;

import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class TodoApiTest {
    static {
        RestAssured.baseURI = "http://localhost:8080";
    }

    @Test
    void testTodos() {
        given()
            .body("Task from RestAssured")
            .when().post("/todos")
            .then().statusCode(200);

        get("/todos")
            .then().statusCode(200)
            .body(containsString("Task from RestAssured"));
    }
}
