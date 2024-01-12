import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/');
  await expect(page.locator('#login_form')).toContainText('Existing User Login - Build 1');

  await page.locator('#username').fill('Goutham420');
  await page.locator('#password').fill('Jawa@420');
  await page.getByRole('button', { name: 'Login' }).click();
  console.log("Login Button Is Clicked")

  await expect(page.locator('#username_show')).toBeVisible();
  //await page.getByRole('link', { name: 'Search Hotel' }).click();
  await page.locator('#location').selectOption('Sydney');
  await page.locator('#hotels').selectOption('Hotel Creek');
  await page.locator('#room_type').selectOption('Standard');
  await page.locator('#adult_room').selectOption('2');
  await page.locator('#child_room').selectOption('2');
  await page.getByRole('button', { name: 'Search' }).click();
  console.log("Button is Clicked and navigate to select hotel page");

  await expect(page.getByRole('cell', { name: 'Select Hotel', exact: true })).toBeVisible();
  await page.locator('#radiobutton_0').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  console.log("Radio button is clicked");


  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('john');
  await page.locator('#last_name').click();
  await page.locator('#last_name').fill('Cena');
  await page.locator('#address').click();
  await page.locator('#address').fill('123, Polard Street, America, 600019.');
  await page.locator('#cc_num').click();
  await page.locator('#cc_num').fill('1234567891234567');
  await page.locator('#cc_type').selectOption('VISA');
  await page.locator('#cc_exp_month').selectOption('2');
  await page.locator('#cc_exp_year').selectOption('2024');
  console.log("Navigate to the form page and entered somthing");
  
  
});