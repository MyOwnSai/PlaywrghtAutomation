const { test, expect, chromium } = require('@playwright/test');
test.describe.configure({ mode: 'serial' });

let page;
test.beforeAll('Before All', async ({ browser }) => {
    page =await browser.newPage();

})

test('launch URL', async () => {
    await page.goto('https://adactinhotelapp.com/');
})

test('log in', async () => {
    await page.locator('//input[@id="username"]').fill('saiGoutham123');
    await page.locator('//input[@id="password"]').fill('Jawa@123');
    await page.locator('//input[@id="login"]').click();
})
test('search hotel', async () => {
    const get_search_Hotel_Text = await page.locator('//title[text()="Adactin.com - Search Hotel"]').textContent();
    console.log(get_search_Hotel_Text);
    
})

test.afterAll('after all', async () => {
    await page.close();
})