const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(baseURL);
});

test("page title should be 'Arc'", async ({ page }) => {
  const pageTitle = await page.title();
  expect(pageTitle).toBe("Arc");
});

test("default initials input placeholder should be 'JD'", async ({ page }) => {
  const initialsInputValue = await page.locator('[placeholder="JD"]').inputValue();
  expect(initialsInputValue).toBe("");
});

test("can select round avatar", async ({ page }) => {
  let isChecked = await page.isChecked("#rounded-input");
  expect(isChecked).toBe(false);

  await page.check("text=Rounded");
  isChecked = await page.isChecked("#rounded-input");
  expect(isChecked).toBe(true);
});

test("can reset form", async ({ page }) => {
  await page.fill("#initials-input", "SB");
  await page.click("text=Reset");
  const initialsInputValue = await page.locator('[placeholder="JD"]').inputValue();
  expect(initialsInputValue).toBe("");
});
