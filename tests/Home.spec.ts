/*

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


DAY -2 
-> Property
-> CSS
-> Xpath

DAY-3

-> page.getByAltText() - to locate an element, usually image, by its text alternative.
-> page.getByPlaceholder() - to locate an input by placeholder.
-> page.getByRole() to locate by explicit and implicit accessibility attributes.
-> page.getByText() to locate by text content.

-> page.getByLabel() to locate a form control by associated label's text.
-> page.getByTitle() to locate an element by its title attribute.
-> page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured


*/
import { test, expect } from '@playwright/test';

test('Built-in Locators', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // const logo = await page.getByAltText('orangehrm-logo'); // Correct the alt text here if needed
  // await expect(logo).toBeVisible();

  await page.getByPlaceholder('Username').fill('admin')
  await page.getByPlaceholder("Password").fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()

await expect(page.getByAltText('john desuza')).toBeVisible();

});



  
