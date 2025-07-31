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
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204');
  await page.waitForLoadState('domcontentloaded');

  // Click the 'REQUESTS' link
  await page.getByRole('link', { name: 'REQUESTS', exact: true }).click();
  await page.waitForLoadState('load');
  //await page.pause()
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('7010');

  await page.getByText('P-Code:').click();
  await page.waitForLoadState('load');
  await page.getByRole('combobox', { name: 'Search' }).fill('NA');
  await page.getByText('Region: NA').click();
  await page.waitForLoadState('load');
  await page.getByRole('combobox', { name: 'Search' }).fill('U');
  await page.getByText('Country: United States of').click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000);
  //await page.pause()
  await page.getByRole('link', { name: '-0000042' }).click();
  // Step 9: Select a grid cell to interact (example: user name cell)
  await page.getByRole('gridcell', { name: 'Mace, Nikki' }).click();

  // Step 10: Open 'REQUEST DETAILS' tab
 

  // Step 11: Final wait to ensure request details are fully loaded
  await page.waitForLoadState('load');




  // await page.getByRole('button', { name: 'P-Code' }).click();
  // await page.getByRole('searchbox', { name: 'Filter P-Code' }).click();
  // await page.getByRole('searchbox', { name: 'Filter P-Code' }).fill(PCODE);
  // await page.getByRole('option', { name: PCODE }).click();
  // await page.waitForLoadState('load');
  // //await page.pause()
  // await page.getByRole('button', { name: 'Region' }).click();
  // await page.waitForLoadState('load');
  // await page.getByRole('combobox', { name: 'Search' }).click();
  // await page.getByRole('searchbox', { name: 'Filter Region' }).click();
  // await page.getByRole('searchbox', { name: 'Filter Region' }).fill('NA');
  // await page.getByRole('option', { name: 'NA' }).click();
  // await page.getByRole('button', { name: 'Country' }).click();
  // await page.getByRole('searchbox', { name: 'Filter Country' }).click();
  // await page.getByRole('searchbox', { name: 'Filter Country' }).fill('United');
  // await page.getByRole('option', { name: 'United States of America (the' }).click();
});
