import { test, expect } from '@playwright/test';

test('Logging into SwagLabs as Locked Out User', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('locked_out_user');

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  const errorBox = page.locator('[data-test="error"]');
  await expect(errorBox).toHaveText('Epic sadface: Sorry, this user has been locked out.')

});