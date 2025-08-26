// tests/e2e/e2e.test.js
const { test, expect } = require("@playwright/test");

test("Ping endpoint works", async ({ request }) => {
  const res = await request.get("http://localhost:3000/ping");
  const body = await res.json();
  expect(body.message).toBe("pong");
});
