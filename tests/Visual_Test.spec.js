const {test,expect} = require('@playwright/test');

test('Visual Test', async({browser})=>{
    const context =await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/')
   // page.waitForLoadState();
    await expect (await page.screenshot()).toMatchSnapshot('login.png')

})