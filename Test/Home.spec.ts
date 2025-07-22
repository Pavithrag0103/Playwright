const { test, expect } = require('@playwright/test');

test('Home', async ({ page }) => {
  await page.goto('https://automationteststore.com/');

  const pageTitle = await page.title();
  console.log('Page title is', pageTitle);

  await expect(page).toHaveTitle('A place to practice your automation skills!');

  const pageURL = await page.url();
  console.log('Page URL is', pageURL);

  await expect(page).toHaveURL('https://automationteststore.com/');
});


