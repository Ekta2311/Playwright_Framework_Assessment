class DashboardPageObj {
  constructor(page) {
    this.page = page;

    // ================= COOKIE =================
    this.cookieAcceptBtn = page.locator("//button[text()='ALLE ERLAUBEN']");

    // ================= MENU =================
    this.parfumMenu = page.locator("(//a[text()='Parfum'])[1]");

    // ================= FILTERS =================
    this.aktionenFilter = page.locator("//button[.//text()[contains(.,'Aktionen')]]"
    );

    this.saleOption = page.locator("//label[.//span[contains(text(),'Sale')]]"
    );

    this.newFilter = page.locator("//label[.//span[contains(text(),'Neu')]]"
    );

    this.limitedFilter = page.locator("//label[.//span[contains(text(),'Limitiert')]]"
    );


    this.productList = page.locator(
      "//div[contains(@data-testid,'product-tile')]"
    );
  }

  async openDouglasApplication() {
    await this.page.goto('https://www.douglas.de/de', {
      waitUntil: 'domcontentloaded'
    });
  }

async acceptCookiess() {
    console.log("Accepting cookies");

    // wait for the shadow host to be available
   // await this.page.waitForSelector('#usercentrics-root');
await this.page.locator('.overflowHidden #usercentrics-root').waitFor({ state: 'attached', timeout: 20000 });
   console.log("Shadow host found");
    await this.page.evaluate(() => {
        // this code runs in browser context
        const shadowHost = document.querySelector('#usercentrics-root');
        if (!shadowHost) return;

        const shadowRoot = shadowHost.shadowRoot;
        if (!shadowRoot) return;

        const button = shadowRoot.querySelector('button[data-testid="uc-accept-all-button"]');
        if (button) {
            button.click();
            console.log("Clicked the cookie button inside shadow DOM");
        }
    });

    console.log("Finished executing acceptCookies");
}


  async clickParfumMenu() {
    await this.parfumMenu.waitFor({ state: 'visible', timeout: 15000 });
    await this.parfumMenu.click();


  }

async printProductsByCriteria(labelText) {

  console.log('\n==============================');
  console.log(`===== ${labelText} PRODUCTS =====`);
  console.log('==============================');

  const productNameXpath = `
    //div[text()='${labelText}']
    /ancestor::div[@class='product-tile__icon-wrapper']
    /ancestor::div[@data-testid="product-tile"]
    //div[@class='text top-brand']
  `;

  // Wait for at least one matching product
  await this.page.waitForSelector(productNameXpath, { timeout: 5000 });

  const products = await this.page.$$(productNameXpath);

  if (products.length === 0) {
    console.log(`No products found for label: ${labelText}`);
    return;
  }

  let index = 1;
  for (const product of products) {
    const productName = (await product.textContent())?.trim();
    console.log(`${index}. ${productName}`);
    index++;
  }
}

}

module.exports = { DashboardPageObj };


    