// src/test/java/com/example/demo/unit/MathTest.java
package com.example.demo.unit;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MathTest {
    int add(int a, int b) { return a + b; }

    @Test
    void testAddition() {
        assertEquals(5, add(2, 3));
    }
}
