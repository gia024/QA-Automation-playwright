import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pastel-beauty.com/');
  await page.getByRole('link', { name: 'Shop' }).click();
  await expect(page).toHaveURL('https://www.pastel-beauty.com/shop-pastel/');

  await page.getByRole('link', { name: 'Next' }).click();
  
  await expect(page).toHaveURL('https://www.pastel-beauty.com/shop-pastel/?product-page=2');
  await page.getByRole('link', { name: 'Next' }).click();
  await expect(page).toHaveURL('https://www.pastel-beauty.com/shop-pastel/?product-page=3');


  await page.getByRole('link', { name: 'Shop' }).click();
  await expect(page).toHaveURL('https://www.pastel-beauty.com/shop-pastel/');

});