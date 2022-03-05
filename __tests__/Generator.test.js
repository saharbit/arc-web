const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(baseURL);
});

test("page title should be 'Arc'", async ({ page }) => {
  const pageTitle = await page.title();
  expect(pageTitle).toBe("Arc");
});

test("default initials input should be 'John Doe'", async ({ page }) => {
  const initialsInputValue = await page.inputValue("input#initials-input");
  expect(initialsInputValue).toBe("John Doe");
});

test("default avatar size should be '256px'", async ({ page }) => {
  const avatar = await page.locator("#avatar").boundingBox();
  expect(avatar.width).toBe(256);
  expect(avatar.height).toBe(256);
});

test("can select round avatar", async ({ page }) => {
  let isChecked = await page.isChecked("#rounded-input");
  expect(isChecked).toBe(false);

  await page.check("text=Rounded");
  isChecked = await page.isChecked("#rounded-input");
  expect(isChecked).toBe(true);
});
