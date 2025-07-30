import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

test.setTimeout(600000); // Optional: global timeout

const EMAIL = process.env.EMAIL!;
const PASSWORD = process.env.PASSWORD!;
const PCODE = '7010751'; // You can change this

test('Login and navigate to Central Risk Manager', async ({ page }) => {
  // Step 1: Visit login page
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204');
  await page.waitForLoadState('domcontentloaded');

  // Step 2: Enter email
  await page.getByRole('textbox', { name: /someone@example.com/i }).fill(EMAIL);
  await page.getByRole('button', { name: /next/i }).click();

  // Step 3: Enter password
  await page.getByRole('textbox', { name: /enter the password/i }).fill(PASSWORD);
  await page.getByRole('button', { name: /sign in/i }).click();

  // Step 4: Handle "Don't show this again"
  await page.getByRole('checkbox', { name: /don't show this again/i }).check();
  await page.getByRole('button', { name: /yes/i }).click();
  await page.context().storageState({ path: 'storage.json' });
  
  // Step 5: Search with P-Code
  await page.getByRole('combobox', { name: /P-Code/i }).click();
  await page.getByRole('combobox', { name: /P-Code/i }).fill(PCODE);
  await page.getByRole('option', { name: PCODE }).click();
  await page.getByRole('button', { name: /^Search$/ }).click();

  // Step 6: Click on the project link
  await page.getByRole('link', { name: PCODE }).click();
  await expect(page).toHaveURL(/.*P0_PROJECT_CODE.*/);
  //await page.pause()

  await page.getByRole('link', { name: 'Central Risk Manager' }).click();
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:2792660425964::::P19_ROLE_ID,P19_YEAR:34,1&cs=13ris8WtfVGyEPeQCfq8h8FDyHkn5NAKrvIO-LueEIzXvmqfClJhivjRSJqPT-FLjs99L5-oUOmBbxi0EP3SSww');
  await page.getByRole('tab', { name: 'NA' }).click();
  await page.getByRole('gridcell', { name: '2', exact: true }).first().dblclick();
  await page.getByRole('textbox', { name: 'Jul-' }).fill('3');
  await page.getByRole('gridcell', { name: '2', exact: true }).dblclick();
  await page.getByRole('textbox', { name: 'Aug-' }).dblclick();
  await page.getByRole('textbox', { name: 'Aug-' }).fill('3');
  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:9833879374418:::::');
  await page.getByRole('button', { name: 'SUBMIT RESOURCE REQUESTS' }).click();
  await page.getByRole('button', { name: 'YES' }).click();
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:1144212392959:::::');
});