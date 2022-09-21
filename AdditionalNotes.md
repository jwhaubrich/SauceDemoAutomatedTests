This project was created from using commands to put the project together (not the Playwright VSC extension) commands in the terminal such as:

1. npm i -D @playwright/test ... to install the basic project structure and modules
2. npx playwright install ... to install all browsers for testing against
3. npm i -D @playwright/test allure-playwright ... to install the integration with reporting
     - then add "reporter: 'allure-playwright'," to the playwright.config.js file
     - also need this: npm install -g allure-commandline --save-dev ... to run allure from command-line
     - then run test as normal
     - allure generate my-allure-results -o allure-report --clean
     - allure open allure-report

Differences with using the above method vs the playwright extension tool:
- it doesn't show you which step you're on within the test code while the test is executing
- the reporting for you isn't automatically generated inside playwright-report
   - when the extension is used, after the tests are ran, then a report is auto-generated and opens in your default browser to show you test results or it will tell you how to open the report