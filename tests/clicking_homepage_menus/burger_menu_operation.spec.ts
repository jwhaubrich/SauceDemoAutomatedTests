import { test, expect, type Page  } from '@playwright/test';

test.use({ storageState: 'sauceDemoLogin.json'});
test('Burger Menu is Operational', async ({ page }) => {
    
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.locator('text=Open Menu').click();

  await page.locator('text=About').click();
  await expect(page).toHaveURL('https://saucelabs.com/');

  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.locator('text=Sauce Labs Bike Light').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=0');

  await page.locator('text=Open Menu').click();

  await page.locator('text=All Items').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.locator('text=Open Menu').click();

  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/');

});