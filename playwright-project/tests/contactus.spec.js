import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pastel-beauty.com/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('garima maharjan');
  await page.getByPlaceholder('Phone Number').click();
  await page.getByPlaceholder('Phone Number').fill('9856321456');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('garima@gmail.com');
  await page.getByPlaceholder('Message').click();
  await page.getByPlaceholder('Message').fill('abcde');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByText('Thank you for contacting us.').click();

  await expect(page).toHaveURL('https://www.pastel-beauty.com/contact-us-now/');

});