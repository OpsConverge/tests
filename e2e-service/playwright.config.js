// Playwright configuration
// Runs tests in Chromium, Firefox, and WebKit

import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: 1,
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "http://localhost:3000" // Replace with your app under test
  },
  reporter: [
    ["list"],
    ["junit", { outputFile: "playwright-results.xml" }],
    ["html", { open: "never" }]
  ]
});
