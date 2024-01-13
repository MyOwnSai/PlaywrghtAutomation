const { test, expect } = require('@playwright/test');
//const { addAbortListener } = require('events');

test('Hard Assertion', async ({ page }) => {
    await page.goto('http://adactinhotelapp.com/');
    await expect(page).toHaveURL('http://adactinhotelapp.com/');
    await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');
    await page.locator('id=username').fill("saiGoutham123");
    await page.locator('id=password').fill("Jawa@123");
    await page.locator('#login').click();
    await page.locator('//input[@value="Hello saiGoutham123!"]').toHaveAttribute('Hello saiGoutham123!');




}
);

test('Soft assertion', async ({ page }) => {
    await page.goto('http://adactinhotelapp.com/');
    await expect.soft(page.locator(('#username'))).toHaveAttribute('class', 'login_input1');
    await expect(page.locator('id=username')).toHaveAttribute('class', /input/);
    await expect(page.locator('id=username')).toHaveAttribute('value', '');
    await expect(page.locator('id=username')).toHaveClass('login_input');

}
);