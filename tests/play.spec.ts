import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Load variables from .env

// Set a higher timeout globally
test.setTimeout(60000);

const EMAIL = process.env.EMAIL!;
const PASSWORD = process.env.PASSWORD!;

test('Full login and resource request flow', async ({ page }) => {
  // Step 1: Launch login page
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204');
  await page.waitForLoadState('domcontentloaded');

  // Step 2: Enter email ID
  await page.getByRole('textbox', { name: 'someone@example.com' }).fill(EMAIL);
  await page.getByRole('button', { name: 'Next' }).click();

  // Step 3: Enter password
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Step 4: "Don't show this again"
  await page.getByRole('checkbox', { name: /Don't show this again/i }).check();
  await page.getByRole('button', { name: 'Yes' }).click();

  // Step 5: Search P-Code
  //await page.pause()
  await page.getByRole('combobox', { name: 'P-Code' }).click();
  await page.getByRole('combobox', { name: 'P-Code' }).fill('7010751');
  await page.getByRole('option', { name: '7010751' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: '7010751' }).click();
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:18');

  // Step 6: Navigate to role
  //await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:18:13547338287883::::P0_PROJECT_CODE,P18_YEAR_DROPDOWN:%5C7010751%5C,1');
  await page.getByRole('link', { name: 'Central Risk Manager' }).click();
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:19:1311693759671::::P19_ROLE_ID,P19_YEAR:34,1');

  // Step 7: Select region and country
  await page.getByRole('tab', { name: 'NA' }).click();
  await page.locator('#NA_COUNTRY_lov_btn').click();
  await page.getByRole('option', { name: 'United States of America (the)' }).click();

  // Step 8: Enter hours
  await page.getByRole('textbox', { name: /Jul-/i }).fill('2');
  await page.getByRole('textbox', { name: /Aug-/i }).fill('2');

  // Step 9: Save
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Step 10: Submit request
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:19:7970067408166:::::');
  await page.getByRole('button', { name: 'SUBMIT RESOURCE REQUESTS' }).click();
  await page.getByRole('button', { name: 'YES' }).click();

  // Step 11: Handle optional "Close" dialog
  const closeBtn = page.getByRole('button', { name: 'Close' });
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
});
