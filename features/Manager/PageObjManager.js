
const { DashboardPageObj } = require('../PageObject/DashboardPageObj');



class PageObjManager {
    constructor(page) {
        this.page = page;
        this.dashboardPage = new DashboardPageObj(page);
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
}
module.exports = { PageObjManager };