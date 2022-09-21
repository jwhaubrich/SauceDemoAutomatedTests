import { test, expect, type Page } from '@playwright/test';

test.use({ storageState: 'sauceDemoLogin.json'});
test('Successful Product Purchase', async ({ page }) => {
    
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click a:has-text("1")
  await page.locator('#shopping_cart_container a').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click [data-test="checkout"]
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  // Click [data-test="firstName"]
  await page.locator('[data-test="firstName"]').click();

  // Fill [data-test="firstName"]
  await page.locator('[data-test="firstName"]').fill('Joe');

  // Press Tab
  await page.locator('[data-test="firstName"]').press('Tab');

  // Fill [data-test="lastName"]
  await page.locator('[data-test="lastName"]').fill('Shmo');

  // Press Tab
  await page.locator('[data-test="lastName"]').press('Tab');

  // Fill [data-test="postalCode"]
  await page.locator('[data-test="postalCode"]').fill('12345');

  // Click [data-test="continue"]
  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  // Click [data-test="finish"]
  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

  // Click text=THANK YOU FOR YOUR ORDER
  const successfulPurchaseMessage = page.locator('text=THANK YOU FOR YOUR ORDER');
  await expect(successfulPurchaseMessage).toHaveText('THANK YOU FOR YOUR ORDER');

});
