const playwright= require('playwright');
const {Before,After, AfterStep,Status}=require('@cucumber/cucumber');
const { PageObjManager } = require('../Manager/PageObjManager');


Before(async function()
{
   const browser = await playwright.chromium.launch({ headless: false });
   const context = await browser.newContext();
   this.page = await context.newPage();
   this.POManager = new PageObjManager(this.page);

});
After(function()
{
    console.log("After method");
});

// After(async function () {
//   await this.browser.close();
// });

AfterStep(async function ({ result }) {
  if (result?.status === Status.FAILED) { 
    await this.page.screenshot({ path: 'screenshot.png' });
    console.log('📸 Screenshot taken and saved as screenshot.png');
  }
});


