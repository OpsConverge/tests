import pytest
from app import app

@pytest.fixture
def client():
    app.testing = True
    with app.test_client() as client:
        yield client

def test_todo_endpoints(client):
    res = client.post("/todos", json={"task": "Write integration tests"})
    assert res.status_code == 201

    res = client.get("/todos")
    assert res.status_code == 200
    assert b"Write integration tests" in res.data
