import { test, expect } from '@playwright/test';

test('Logging into SwagLabs as Locked Out User', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('locked_out_user');

  // Click [data-test="password"]
  await page.locator('[data-test="password"]').click();

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();

  const errorBox = page.locator('[data-test="error"]');
  await expect(errorBox).toHaveText('Epic sadface: Sorry, this user has been locked out.')

});