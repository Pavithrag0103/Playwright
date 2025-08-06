import { test, expect } from '@playwright/test';



  // // Step 2: Enter email
  // await page.getByRole('textbox', { name: /someone@example.com/i }).fill(EMAIL);
  // await page.getByRole('button', { name: /next/i }).click();

  // // Step 3: Enter password
  // await page.getByRole('textbox', { name: /enter the password/i }).fill(PASSWORD);
  // await page.getByRole('button', { name: /sign in/i }).click();

  // // Step 4: Handle "Don't show this again"
  // await page.getByRole('checkbox', { name: /don't show this again/i }).check();
  // await page.getByRole('button', { name: /yes/i }).click();
  //await page.context().storageState({ path: 'storage.json' });


const PCODE = '7010751'; // Change as needed or load from env
const REGION = 'NA'; 

test('Navigate and select P-Code from dropdown', async ({ page }) => {
  // Go to the page
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204', { timeout: 70000 }); // 60 seconds
  //await page.waitForLoadState('load')
  await page.waitForLoadState('domcontentloaded');

  // Click the 'REQUESTS' link
  await page.getByRole('link', { name: 'REQUESTS', exact: true }).click();
  await page.getByRole('combobox', { name: 'Search' }).waitFor({ state: 'visible', timeout: 15000 });
  //await page.pause()
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('7010');

  await page.getByText('P-Code:').click();
  await page.waitForLoadState('load');
  await page.getByRole('combobox', { name: 'Search' }).fill('NA');
  await page.getByText('Region: NA').click();
  await page.waitForLoadState('load');
  await page.getByRole('combobox', { name: 'Search' }).fill('U');
  await page.getByText('Country: United States of').waitFor({ state: 'visible', timeout: 10000 });
  await page.getByText('Country: United States of').click();
  await page.waitForLoadState('load');

  

  await page.getByRole('link', { name: '-0000042' }).click({ timeout: 5000 });
await page.getByRole('heading', { name: /Request Summary/i }).waitFor({ state: 'visible', timeout: 30000 });

// Wait for assignment grid to appear (instead of waitForLoadState)
const assignmentGrid = page.getByRole('grid', { name: /Resource details1/i });
await assignmentGrid.waitFor({ state: 'visible', timeout: 15000 });

  // Locate the assignment grid accurately by its accessible name or other stable selector
  await page.waitForLoadState('load');

  //await page.pause()
  await page.getByRole('gridcell', { name: '3', exact: true }).click();
  await page.getByLabel('', { exact: true }).dblclick();
  await page.getByLabel('', { exact: true }).fill('7');



  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByRole('button', { name: 'YES' }).click();
  await page.locator('#admin_card_breadcrumb').getByRole('img').click();
  await page.waitForLoadState('load')
  await page.getByRole('link', { name: 'DIRECT ASSIGN' }).click();

});
