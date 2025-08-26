// tests/integration/app.integration.test.js
const request = require("supertest");
const app = require("../../app");

describe("App Integration", () => {
  it("GET /ping returns pong", async () => {
    const res = await request(app).get("/ping");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("pong");
  });

  it("POST /todos and GET /todos", async () => {
    await request(app).post("/todos").send({ task: "Write tests" });
    const res = await request(app).get("/todos");
    expect(res.body.todos).toContain("Write tests");
  });
});
