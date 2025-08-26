import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 10,         // Virtual users
  duration: "30s", // Test duration
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests under 500ms
    http_req_failed: ["rate<0.01"]    // <1% request failures
  }
};

export default function () {
  let res = http.get("https://test-api.k6.io/public/crocodiles/");

  check(res, {
    "status is 200": (r) => r.status === 200,
    "response time < 500ms": (r) => r.timings.duration < 500,
  });

  sleep(1);
}
