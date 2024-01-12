const { test, expect } = require('@playwright/test');
//const { addAbortListener } = require('events');

test('assertion', async ({ page }) => {
    await page.goto('http://adactinhotelapp.com/');
    await expect(page).toHaveURL('http://adactinhotelapp.com/');
    await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');
    await page.locator('id=username').fill("saiGoutham123");
    await page.locator('id=password').fill("Jawa@123");
    await page.locator('#login').click();

    await page.locator('//input[@value="Hello saiGoutham123!"]').toHaveAttribute('Hello saiGoutham123!');




}
);