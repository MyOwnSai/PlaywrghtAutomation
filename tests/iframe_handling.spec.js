const { test, expect, chromium } = require('@playwright/test');

test('iFrame Hndling', async ({ page }) => {

    await page.goto("http://autopract.com/selenium/iframe1/");
    await page.screenshot({ path: 'Screenshots/screenshot.png' });
    await page.screenshot({ path: 'Screenshots/screenshot1.png', fullPage: true });
    await page.screenshot({ path: 'Screenshots/screenshot_' + Date.now() + '.png' });
    const myFrame3 = page.frame({ url: "http://autopract.com/selenium/form1/" });      //By Url
    await myFrame3.fill("(//input[@class='form-control'])[1]", "SaiGoutham");    //Sending input nearby locator
    await myFrame3.locator("(//input[@class='form-control'])[1]").screenshot({ path: 'Screenshot/screenshot22.png' });     //Taking screenshot username alone
    await myFrame3.locator('(//input[@class="form-control"])').nth(1).fill("SaiG@123")

}
);