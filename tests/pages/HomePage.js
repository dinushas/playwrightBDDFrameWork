class HomePage {
    constructor(page) {
        this.page = page;
       

    } 

    async enterUserName(email) {
        await this.page.fill(this.emailAddress, email)
    }




}

module.exports = { HomePage }