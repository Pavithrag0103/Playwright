import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

test.setTimeout(600000); // Optional: global timeout

// const EMAIL = process.env.EMAIL!;
// const PASSWORD = process.env.PASSWORD!;
const PCODE = '7010751'; // You can change this
const REGION = 'NA'; 

test('Login and navigate to Central Risk Manager', async ({ page }) => {
  // // Step 1: Visit login page
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204');
  await page.waitForLoadState('domcontentloaded');






  // Step 5: Search with P-Code
  await page.getByRole('combobox', { name: /P-Code/i }).click();
  await page.getByRole('combobox', { name: /P-Code/i }).fill(PCODE);
  await page.getByRole('option', { name: PCODE }).click();
  await page.getByRole('button', { name: /^Search$/ }).click();

  // Step 6: Click on the project link
  await page.getByRole('link', { name: PCODE }).click();
  await expect(page).toHaveURL(/.*P0_PROJECT_CODE.*/);
  await page.waitForLoadState('load');
 
  //await page.pause()

  await page.getByRole('link', { name: 'Central Risk Manager' }).click();
  //await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:2792660425964::::P19_ROLE_ID,P19_YEAR:34,1&cs=13ris8WtfVGyEPeQCfq8h8FDyHkn5NAKrvIO-LueEIzXvmqfClJhivjRSJqPT-FLjs99L5-oUOmBbxi0EP3SSww');
  await page.waitForLoadState('load');
  await page.getByRole('tab', { name: 'NA' }).click();
  //await page.pause()




// Step 7 - Click on a specific cell in the table
const julyCell = page.locator('tr:nth-child(3) > .a-GV-cell.u-tE.no_warning.COPY_CELL.DRAG_MONTH_1');
await julyCell.dblclick();
await page.waitForTimeout(300);

// Step 8 - Fill July column
const julyInput = page.getByRole('textbox', { name: /Jul-/ });
await julyInput.waitFor({ state: 'visible' });
await julyInput.fill('2');
// // Step 9 - Move to August column and fill
const augCell = page.locator('tr:nth-child(3) > .a-GV-cell.u-tE.no_warning.COPY_CELL.DRAG_MONTH_1');
await augCell.dblclick();
await page.waitForTimeout(300);

// Step 8 - Fill July column
const augInput = page.getByRole('textbox', { name: /Aug-/});
await augInput.waitFor({ state: 'visible' });
await augInput.fill('2');

// Step 10 - Save the changes
await page.getByRole('button', { name: 'SAVE' }).click();



// Step 12 - Submit Resource Requests
await page.getByRole('button', { name: 'SUBMIT RESOURCE REQUESTS' }).click();
await page.getByRole('button', { name: 'YES' }).click();

//Step -13 -Click the 'REQUESTS' link
await page.getByRole('link', { name: 'REQUESTS', exact: true }).click();
await page.waitForLoadState('load');
  //await page.pause()
await page.getByRole('button', { name: 'P-Code' }).click();
await page.getByRole('searchbox', { name: 'Filter P-Code' }).click();
await page.getByRole('searchbox', { name: 'Filter P-Code' }).fill(PCODE);
await page.getByRole('option', { name: '' }).click();
await page.waitForLoadState('load');


  // Step 12: Apply Region filter
  await page.getByRole('button', { name: /Region/i }).click();
  const filterRegionInput = page.getByRole('searchbox', { name: /Filter Region/i });
  await filterRegionInput.click();
  await filterRegionInput.fill(REGION);
  await page.getByRole('option', { name: REGION }).click();
  await page.waitForLoadState('load');


});