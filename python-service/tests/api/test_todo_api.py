import requests

BASE_URL = "http://localhost:5000"

def test_add_and_get_todos():
    res = requests.post(f"{BASE_URL}/todos", json={"task": "Task from API test"})
    assert res.status_code == 201

    res = requests.get(f"{BASE_URL}/todos")
    assert res.status_code == 200
    assert "Task from API test" in res.text
