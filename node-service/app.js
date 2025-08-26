// app.js
const express = require("express");
const app = express();
app.use(express.json());

app.get("/ping", (req, res) => res.json({ message: "pong" }));

let todos = [];
app.post("/todos", (req, res) => {
  const { task } = req.body;
  todos.push(task);
  res.status(201).json({ task });
});
app.get("/todos", (req, res) => res.json({ todos }));

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));
}
