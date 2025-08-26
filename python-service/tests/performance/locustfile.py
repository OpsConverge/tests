from locust import HttpUser, task

class TodoUser(HttpUser):
    @task
    def get_todos(self):
        self.client.get("/todos")

    @task
    def add_todo(self):
        self.client.post("/todos", json={"task": "Load test task"})
