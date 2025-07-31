import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

test.setTimeout(600000); // Optional: global timeout

// const EMAIL = process.env.EMAIL!;
// const PASSWORD = process.env.PASSWORD!;
const PCODE = '7010751'; // You can change this

test('Login and navigate to Central Risk Manager', async ({ page }) => {
  // // Step 1: Visit login page
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204');
  await page.waitForLoadState('domcontentloaded');

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
await page.locator('tr:nth-child(3) > .a-GV-cell.u-tE.no_warning.COPY_CELL.DRAG_MONTH_1').click();
await page.locator('.a-GV-cell.u-tE.no_warning.COPY_CELL.DRAG_MONTH_1').first().dblclick();

// Step 8 - Fill July column
await page.getByRole('textbox', { name: /Jul-/ }).fill('1');
});

//   await page.locator('tr:nth-child(3) > .a-GV-cell.u-tE.no_warning.COPY_CELL.DRAG_MONTH_1').click();
//   await page.locator('.a-GV-cell.u-tE.no_warning.COPY_CELL.DRAG_MONTH_1').dblclick();
//   await page.getByRole('textbox', { name: 'Jul-' }).fill('1');
//   await page.locator('.a-GV-row.is-hover > .a-GV-cell.u-tE.no_warning.COPY_CELL.DRAG_MONTH_2').click();
//   await page.getByRole('textbox', { name: 'Aug-' }).press('ArrowRight');
//   await page.getByRole('textbox', { name: 'Aug-' }).fill('1');
//   await page.getByRole('button', { name: 'SAVE' }).click();
//   await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:16574291340447:::::');
//   await page.getByRole('button', { name: 'SUBMIT RESOURCE REQUESTS' }).click();
//   await page.getByRole('button', { name: 'YES' }).click();
//   await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:16192432590046:::::');
// });