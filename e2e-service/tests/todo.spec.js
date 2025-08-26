import { test, expect } from "@playwright/test";

test("add a todo item", async ({ page }) => {
  await page.goto("/");

  await page.fill('input[name="todo"]', "Write E2E tests");
  await page.click('button[type="submit"]');

  const todoItem = page.locator("li").last();
  await expect(todoItem).toContainText("Write E2E tests");
});
