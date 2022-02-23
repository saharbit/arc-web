const { test, expect } = require("@playwright/test");

test("page title should be 'Arc'", async ({ page, baseURL }) => {
  await page.goto(baseURL);
  const pageTitle = await page.title();
  expect(pageTitle).toBe("Arc");
});

test("default initials input should be 'John Doe'", async ({
  page,
  baseURL,
}) => {
  await page.goto(baseURL);
  const initialsInputValue = await page.inputValue("input#initials-input");
  expect(initialsInputValue).toBe("John Doe");
});

test("default avatar size should be '256px'", async ({ page, baseURL }) => {
  await page.goto(baseURL);
  const avatar = await page.locator("#avatar").boundingBox();
  expect(avatar.width).toBe(256);
  expect(avatar.height).toBe(256);
});

test("can change avatar size", async ({ page, baseURL }) => {
  await page.goto(baseURL);
  await page.click("text=512px");
  const avatar = await page.locator("#avatar").boundingBox();
  expect(avatar.width).toBe(512);
  expect(avatar.height).toBe(512);
});

test("can select round avatar", async ({ page, baseURL }) => {
  await page.goto(baseURL);
  let isChecked = await page.isChecked("#rounded-input");
  expect(isChecked).toBe(false);

  await page.check("text=Rounded");
  isChecked = await page.isChecked("#rounded-input");
  expect(isChecked).toBe(true);
});
