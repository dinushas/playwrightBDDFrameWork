

const { Before, After, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { getBrowser } = require('../utils/browserFactory');
const { HomePage } = require('../pages/HomePage');
require('dotenv').config();

setDefaultTimeout(30 * 1000);

// Before(async function () {
//   const browser = await getBrowser();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   this.browser = browser;
//   this.context = context;
//   this.page = page;

//   this.homePage = new HomePage(page);
// });

Then('I should see {string} button visible', async function (buttonName) {
      await this.homePage.checkCTAButtonIsVisible(buttonName)

  
});

Then('I click {string} hero CTA button', async function (buttonName) {
      await this.homePage.clickCTAButton(buttonName)

  
});

Then('I click on logo on the header', async function () {
      await this.homePage.clickLogo()
  
});




After(async function () {
  try {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  } catch (err) {
    console.log('Cleanup error:', err);
  }
});