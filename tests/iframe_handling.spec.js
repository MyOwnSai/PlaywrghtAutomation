const { test, expect } = require('@playwright/test');

test('iframe handling', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/iframe1/');

    await page.frameLocator('testframe');

    await page.locator('(//input[@class="form-control"])[1]').fill("SaiGoutham")


}
)