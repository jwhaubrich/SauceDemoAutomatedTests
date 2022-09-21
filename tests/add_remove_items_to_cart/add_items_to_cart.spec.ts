import { test, expect, type Page  } from '@playwright/test';

test.use({ storageState: 'sauceDemoLogin.json'});
test('Adding Items to Cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();

  const shoppingCartTotal = page.locator('#shopping_cart_container a')
  await expect(shoppingCartTotal).toHaveText('6');

});