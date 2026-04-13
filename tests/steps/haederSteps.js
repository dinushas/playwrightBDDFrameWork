
const { Before, After, Given, Then, setDefaultTimeout } = require('@cucumber/cucumber');
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
  console.log('Opening:', process.env.BASE_URL);

  await this.page.goto(process.env.BASE_URL, {
    waitUntil: 'domcontentloaded',
    timeout: 30000
  });

  console.log('Page opened');
});

Then('I should see the page title', async function () {
  const title = await this.page.title();
  console.log('Page title:', title);
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