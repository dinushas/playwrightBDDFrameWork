

const { Before, After, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { getBrowser } = require('../utils/browserFactory');
const { HomePage } = require('../pages/HomePage');
require('dotenv').config();

setDefaultTimeout(30 * 1000);

Before(async function () {
  const browser = await getBrowser();
  const context = await browser.newContext();
  const page = await context.newPage();

  this.browser = browser;
  this.context = context;
  this.page = page;

  this.homePage = new HomePage(page);
});

Given('I open the homepage', async function () {

  await this.page.goto(process.env.BASE_URL, {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  console.log('Page opened');
});

Then('the {string} link is visible', async function (linkName) {
  await this.homePage.checkPlatformLink(linkName)
  
});



Then('I should see the correct homepage URL', async function () {
    const url = await this.homePage.getCurrentUrl();
    await this.homePage.verifyUrl(process.env.BASE_URL)
  
});

When('I click {string} link', async function (linkName) {
      await this.homePage.clickNavLink(linkName);

  
});

Then('URL should contain {string}', async function (partialUrl) {
 await expect(this.page).toHaveURL(new RegExp(partialUrl));
  
});



When('I click {string} button', async function (buttonName) {
    await this.homePage.clickBookDemo(buttonName);


});

Then('I click {string} link and verify URL contains {string}', async function (linkName, urlPart) {
    await this.homePage.clickLoginLink(linkName);

    await expect(this.page).toHaveURL(new RegExp(urlPart));
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