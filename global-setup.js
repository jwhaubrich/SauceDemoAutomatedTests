/* 
- this file is used to set up the test environment by setting the username and password for saucedemo.com
- and is executed from the playwright.config.js file with the globalSetup keyword
- once executed, the file creates the sauceDemoLogin.json file, that will be used in further tests
- the sauceDemoLogin.json file is then put at the top of each individual test such with this:
     - test.use({ storageState: 'sauceDemoLogin.json'});
 */

 
const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill('input[name="user-name"]', 'standard_user');
  await page.fill('input[name="password"]', 'secret_sauce');
  await page.click('text=LOGIN');
  // Save signed-in state to 'saucedemoLogin.json'.
  await page.context().storageState({ path: 'sauceDemoLogin.json' });
  await browser.close();
};