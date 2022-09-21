import { test, expect, type Page } from '@playwright/test';

test.use({ storageState: 'sauceDemoLogin.json'});
test('Successful Product Purchase', async ({ page }) => {
    
  await page.goto('https://www.saucedemo.com/inventory.html');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('#shopping_cart_container a').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  await page.locator('[data-test="firstName"]').click();

  await page.locator('[data-test="firstName"]').fill('Joe');

  await page.locator('[data-test="firstName"]').press('Tab');

  await page.locator('[data-test="lastName"]').fill('Shmo');

  await page.locator('[data-test="lastName"]').press('Tab');

  await page.locator('[data-test="postalCode"]').fill('12345');

  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

  const successfulPurchaseMessage = page.locator('text=THANK YOU FOR YOUR ORDER');
  await expect(successfulPurchaseMessage).toHaveText('THANK YOU FOR YOUR ORDER');

});
