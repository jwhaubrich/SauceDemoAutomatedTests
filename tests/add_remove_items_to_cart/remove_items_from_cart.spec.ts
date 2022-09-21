import { test, expect, type Page  } from '@playwright/test';

test.use({ storageState: 'sauceDemoLogin.json'});
test('Remove Items from Cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/inventory.html');

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

  // Click [data-test="add-to-cart-sauce-labs-fleece-jacket"]
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  // Click [data-test="add-to-cart-sauce-labs-onesie"]
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

  // Click [data-test="add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)"]
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();

  // Click a:has-text("6")
  const shoppingCartTotal = page.locator('#shopping_cart_container a');
  await expect(shoppingCartTotal).toHaveText('6');

    // Click [data-test="remove-sauce-labs-backpack"]
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    // Click [data-test="remove-sauce-labs-bike-light"]
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();

    // Click [data-test="remove-sauce-labs-bolt-t-shirt"]
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();

    // Click [data-test="remove-sauce-labs-fleece-jacket"]
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();

    // Click [data-test="remove-sauce-labs-onesie"]
    await page.locator('[data-test="remove-sauce-labs-onesie"]').click();

    // Click [data-test="remove-test\.allthethings\(\)-t-shirt-\(red\)"]
    await page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();

      // Click a:has-text("6")
    const shoppingCartTotalZero = page.locator('#shopping_cart_container a');
    await expect(shoppingCartTotalZero).toHaveText('');
  
  });