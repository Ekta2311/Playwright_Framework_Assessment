const { When, Then, Given } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('user navigates to Douglas website', { timeout: 100 * 1000 }, async function () {
  const dashboardPage = this.POManager.getDashboardPage();
  await dashboardPage.openDouglasApplication();
});

Given('user accepts the cookie consent', {timeout: 100 * 1000} ,async function () {
  const dashboardPage = this.POManager.getDashboardPage();
  console.log("Accepting jhghfcfhg cookies");
  await dashboardPage.acceptCookiess();
});

When('user clicks on Parfum category', async function () {
  const dashboardPage = this.POManager.getDashboardPage();
  await dashboardPage.clickParfumMenu();
 
});

When('user applies {string} filter', async function (criteria) {
  const dashboardPage = this.POManager.getDashboardPage();
 // await dashboardPage.applyParfumFilter(criteria);
  await dashboardPage.printProductsByCriteria(criteria);
});

Then('user should see list of products for {string}', async function () {
  const dashboardPage = this.POManager.getDashboardPage();
  const count = await dashboardPage.getDisplayedProductCount();
  expect(count).toBeGreaterThan(0);
});


