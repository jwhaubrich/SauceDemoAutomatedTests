// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    // use: {
    //   baseURL: 'https://www.saucedemo.com/',
    // },
    //above is used for setting the base URL needed if you don't want to keep writing out the entire URL within tests

    reporter: [
      ['list'], //used for displaying the test name and showing the status if the test passed or not
      //['dot'], //used showing dots as progression as the tests pass/fail
      ['allure-playwright', {
        detail: true,
        outputFolder: 'my-allure-results',
        suiteTitle: false
      }]
    ],
    
    //'allure-playwright', 'list'
    //the above is to set report generation to allure

     globalSetup: require.resolve('./global-setup')
    // above used for setting up global state of the test execution environment and creating 
    // the JSON file that contains the specific login state, so we don't have to log in to the application
    // for every single test
    // only need to run ONCE to create the JSON state file
  };
  
  module.exports = config;