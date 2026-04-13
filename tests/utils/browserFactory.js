
const { chromium } = require('playwright');

let browser;

async function getBrowser() {
  if (!browser || !browser.isConnected()) {
    browser = await chromium.launch({
      headless: true,
    });
  }
  return browser;
}

async function closeBrowser() {
  if (browser && browser.isConnected()) {
    await browser.close();
  }
  browser = null;
}

module.exports = {
  getBrowser,
  closeBrowser
};