const { expect } = require('@playwright/test');
class HomePage {
    constructor(page) {
        this.page = page;
        this.logo = '.nav_desktop_logo'
       

    } 

    async enterUserName(email) {
        await this.page.fill(this.emailAddress, email)
    }

     // check current URL
    async getCurrentUrl() {
        return await this.page.url();
    }

    async verifyUrl(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
}


async clickNavLink(linkName) {
    await this.page.getByRole('navigation')
        .getByRole('link', { name: linkName })
        .click();
}

async checkPlatformLink(linkName) {
  const link = this.page.getByRole('navigation')
    .getByRole('link', { name: linkName });

  await expect(link).toBeVisible();
}

async clickLogo() {
    await this.page.getByRole('link', { name: 'Home Page' }).click();
}

async clickBookDemo() {
  await this.page
    .getByRole('link', { name: 'Book a demo', exact: true })
    .first()
    .click();
}

async clickLoginLink(linkName) {
    const link = this.page
        .getByRole('navigation')
        .getByRole('link', { name: linkName });

    //  force same tab
    await link.evaluate(el => el.removeAttribute('target'));

    await link.click();
}

async verifyPlatformDropdownVisible() {
  await expect(this.page.locator('.nav_dd1').first())
    .toBeVisible({ timeout: 5000 });
}

async checkCTAButtonIsVisible(buttonName){
  await this.page.getByRole('link', { name: buttonName }).toBeVisible
}

async clickCTAButton(buttonName){
  await this.page.getByRole('link', { name: buttonName }).click()
}


}

module.exports = { HomePage }