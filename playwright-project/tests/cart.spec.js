import { test, expect } from '@playwright/test';



test.describe('Pastel Beauty tests', () => {
  
  test('Login to account', async ({ page }) => {
      // Navigate to the website
  await page.goto('https://www.pastel-beauty.com/');
  // Open login form
  await page.locator('.tools-icon > .tools-icon').click();

  // Fill out login form
  await page.fill('input[name="username"]', 'garemamhrzn@gmail.com');
  await page.fill('input[name="password"]', 'G@rima123');

  // Submit login form
  await page.click('button[name="login"]');

  // Verify that the URL is correct after login
  await expect(page).toHaveURL('https://www.pastel-beauty.com/my-account/');

  // Add product to cart
  await page.goto('https://www.pastel-beauty.com/');
  await page.getByRole('link', { name: 'Mascara-Pastel-beauty' }).click();
  await expect(page).toHaveURL('https://www.pastel-beauty.com/product/best-selling-mascara/');
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Proceed to checkout
  await page.getByRole('link', { name: 'View cart' }).click();
  await expect(page).toHaveURL('https://www.pastel-beauty.com/cart/');
  await page.getByRole('link', { name: 'Proceed to checkout' }).click();
  await expect(page).toHaveURL('https://www.pastel-beauty.com/checkout/');
});

test('Logout', async ({ page }) => {
  
    // Navigate to the website
    await page.goto('https://www.pastel-beauty.com/');

    // Open login form
    await page.locator('.tools-icon > .tools-icon').click();

    // Fill out login form
    await page.fill('input[name="username"]', 'garemamhrzn@gmail.com'); // Use the appropriate input selector
    await page.fill('input[name="password"]', 'G@rima123'); // Use the appropriate input selector

    // Submit login form
    await page.click('button[name="login"]'); // Adjust selector as needed

    // Verify that the URL is correct after login
    await expect(page).toHaveURL('https://www.pastel-beauty.com/my-account/');
  

    // Click the logout link using a CSS selector
    await page.click('li.woocommerce-MyAccount-navigation-link--customer-logout a[href^="https://www.pastel-beauty.com/my-account/customer-logout/"]');

    // Verify the URL after logging out
    await expect(page).toHaveURL('https://www.pastel-beauty.com/');
  });

test('update ', async ({ page }) => {
  await page.goto('https://www.pastel-beauty.com/');
  await page.locator('.tools-icon > .tools-icon').click();
  await page.getByLabel('Username or email address *').click();
  await page.getByLabel('Username or email address *').fill('garemamhrzn@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('G@rima123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Woostify logo' }).click();
  await page.getByRole('heading', { name: 'Bronzed eyeshadow' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'View cart' }).click();
  await page.getByRole('cell', { name: 'Bronzed eyeshadow quantity' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Update cart' }).click();
  await page.getByRole('cell', { name: 'Bronzed eyeshadow quantity' }).getByRole('img').nth(1).click();
  await page.locator('#content').click();
  await page.getByRole('button', { name: 'Update cart' }).click();
});


test('social media link', async ({ page }) => {
  await page.goto('https://www.pastel-beauty.com/');
  await page.locator('.tools-icon > .tools-icon').click();
  await page.getByLabel('Username or email address *').click();
  await page.getByLabel('Username or email address *').fill('garemamhrzn@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('G@rima123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Woostify logo' }).click();
  await page.getByRole('link', { name: 'Instagram' }).click();

  await expect(page).toHaveURL('https://www.instagram.com/pastelbeautybylemi/');

});
});

