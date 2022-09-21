import { test, expect } from '@playwright/test';

test('Logging into SwagLabs as Performance Glitch User', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('performance_glitch_user');

  await page.locator('[data-test="username"]').press('Tab');

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret_sauce');

});