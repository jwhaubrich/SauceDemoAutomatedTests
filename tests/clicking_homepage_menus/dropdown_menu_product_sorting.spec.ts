import { test, expect, type Page  } from '@playwright/test';

test.use({ storageState: 'sauceDemoLogin.json'});
test('Sorting Products is Successful', async ({ page }) => {
    
 await page.goto('https://www.saucedemo.com/inventory.html');

  await page.locator('text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();

  await page.locator('[data-test="product_sort_container"]').selectOption('za');

  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');

  await page.locator('[data-test="product_sort_container"]').selectOption('hilo');

  await page.locator('[data-test="product_sort_container"]').selectOption('az');

});