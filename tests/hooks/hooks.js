
const { BeforeAll, AfterAll, Before, After, Status } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

let browser;

//
// 🚀 Start browser once before all tests
//
BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false, // set true for CI
  });
});

//
// 🌐 Create fresh context + page per scenario
//
Before(async function () {
  if (!browser || !browser.isConnected()) {
    browser = await chromium.launch({ headless: false });
  }

  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

//
// 📸 Screenshot on failure + cleanup per scenario
//
After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      fullPage: true,
    });

    await this.attach(screenshot, "image/png");
  }

  if (this.page) {
    await this.page.close();
  }

  if (this.context) {
    await this.context.close();
  }
});

//
// 🧹 Close browser after all tests
//
AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});