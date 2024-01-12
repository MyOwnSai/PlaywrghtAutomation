import { test, expect } from '@playwright/test';

test('FlipKart', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('iphone 14');
  await page.getByPlaceholder('Search for Products, Brands').press('Enter');
  await expect(page.locator('#container')).toContainText('APPLE iPhone 14 (Midnight, 128 GB)');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bestseller APPLE iPhone 14 (Midnight, 128 GB) Add to Compare APPLE iPhone 14 (' }).click();
  const page2 = await page2Promise;
  await expect(page2.getByRole('heading')).toContainText('APPLE iPhone 14 (Midnight, 128 GB)');
  await page2.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page2.getByRole('link', { name: 'Login' })).toBeVisible();
  await page2.getByRole('link', { name: 'Login' }).click();
  await expect(page2.getByRole('paragraph')).toContainText('Get access to your Orders, Wishlist and Recommendations');
});