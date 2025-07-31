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


  await page.waitForLoadState('load');

const firstRow = page.locator('tbody tr').first();

// 2. Locate the first month cell (assuming class naming like DRAG_MONTH_1 for the first month)
const firstMonthCell = firstRow.locator('.a-GV-cell.DRAG_MONTH_1');

await firstMonthCell.click();
await page.waitForTimeout(300); // wait for inline editor to appear

// 3. Wait for the textbox input that should be visible after dblclick (input for first month)
const monthInput = page.getByRole('textbox').first();

await monthInput.waitFor({ state: 'visible' });

// 4. Fill the hours, e.g., assign '2'
await monthInput.fill('2');


});
