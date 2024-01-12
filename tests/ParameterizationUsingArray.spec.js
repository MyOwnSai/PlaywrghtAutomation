const { test, expect } = require('@playwright/test');

const credentials = [
    { login:'amarjasonawane',password:'Amarja@123'},
    { login:'SAral1996',password:'SAral@7200'},
    { login:'misr82hn02',password:'misr82hn02'},
    { login:'sagayapraveen',password:'GGE092'}
]
for(const loginId of credentials){
    test(`testing with ${loginId.login}`,async({page})=>
    {
        await page.goto("https://adactinhotelapp.com/"); 
        await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
        await page.locator('id=username').type(loginId.login);  //id locator
        await page.locator('//input[@id="password"]').type(loginId.password);   //xpath
        await page.locator('//input[@id="login"]').click();
        await expect(page).toHaveTitle("Adactin.com - Search Hotel");
    }
    )
}