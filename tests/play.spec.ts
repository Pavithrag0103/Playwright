import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const EMAIL = process.env.EMAIL as string;
const PASSWORD = process.env.PASSWORD as string;

// if (!EMAIL || !PASSWORD) {
//   throw new Error('EMAIL or PASSWORD is not defined in .env file.');
// }

test('Full E2E Flow', async ({ page }) => {
  test.setTimeout(180_000); // 3-minute timeout

  // Step 1: Launch login page
  await test.step('Launch login page', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204');
  });

  // Step 2: Enter email
  await test.step('Enter email ID', async () => {
    await page.getByRole('textbox', { name: 'someone@example.com' }).fill(EMAIL);
  });

  // Step 3: Click Next
  await test.step('Click Next', async () => {
    await page.getByRole('button', { name: 'Next' }).click();
  });

  // Step 4: Enter password
  await test.step('Enter password', async () => {
    await page.getByRole('textbox', { name: /Enter the password/ }).fill(PASSWORD);
  });

  // Step 5: Click Sign in
  await test.step('Click Sign in', async () => {
    await page.getByRole('button', { name: 'Sign in' }).click();
  });

  // Step 6: Handle "Don't show this again"
  await test.step('Handle "Don\'t show this again"', async () => {
    const dontShowAgain = page.getByRole('checkbox', { name: /Don't show this again/ });
    await dontShowAgain.waitFor({ state: 'visible', timeout: 60000 });
    await dontShowAgain.check();
    await page.getByRole('button', { name: 'Yes' }).click();
  });

  // Step 7: Select P-Code
  await test.step('Select P-Code', async () => {
    await page.getByRole('combobox', { name: 'P-Code' }).click();
    await page.getByRole('combobox', { name: 'P-Code' }).fill('7065175');
    await page.getByRole('option', { name: '7065175' }).locator('span').first().click();
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: '7065175' }).click();
  });

  // Step 8: Navigate project pages
  await test.step('Navigate project pages', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:18:14518004422740::::P0_PROJECT_CODE,P18_YEAR_DROPDOWN:%5C7065175%5C,1');
    await page.getByRole('link', { name: 'Central Monitor' }).click();
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:19:12022212959003::::P19_ROLE_ID,P19_YEAR:32,1');
  });

  // Step 9: Enter grid values
  await test.step('Enter grid values', async () => {
    await page.getByRole('tab', { name: 'APAC' }).click();
    await page.getByRole('gridcell', { name: '2', exact: true }).first().click();
    await page.getByRole('textbox', { name: 'Jul-' }).fill('3');
    await page.getByRole('textbox', { name: 'Aug-' }).fill('3');
    await page.getByRole('textbox', { name: 'Sep-' }).fill('5');
  });

  // Step 10: Save
  await test.step('Click SAVE', async () => {
    await page.getByRole('heading', { name: 'Resource Requests - Central' }).click();
    await page.getByRole('button', { name: 'SAVE' }).click();
  });

  // Step 11: Submit Resource Request
  await test.step('Submit request', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:19:14173676272656:::::');
    await page.getByRole('button', { name: 'SUBMIT RESOURCE REQUESTS' }).click();
    await page.getByRole('button', { name: 'YES' }).click();
  });

  // Step 12: Open request again
  await test.step('Open request again', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:19:5738066442306:::::');
    await page.locator('#admin_card_breadcrumb').getByRole('img').click();
    await page.getByRole('link', { name: 'REQUESTS' }).click();
    await page.getByRole('button', { name: 'P-Code' }).click();
    await page.getByRole('searchbox', { name: 'Filter P-Code' }).fill('7065175');
    await page.getByRole('option', { name: '' }).click();
    await page.getByRole('link', { name: '-0000067' }).click();
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:30:10028022956317:::30:P30_DEMAND_ID,P30_REQUEST_ID,P0_PROJECT_CODE,P30_RD_START_DATE,P30_END_DATE,P30_RD_TOTAL_HRS,P30_S_ROLE_NAME,P30_REQUESTER_COMMENT,P30_S_REGION,P30_S_COUNTRY:%5C24033%5C,%5C7065175-0000067%5C,%5C7065175%5C,%5C01-Jul-2025%5C,%5C30-Sep-2025%5C,%5C11%5C,%5CCentral%20Monitor%5C,,%5CAPAC%5C,%5CAny%20APAC%20Country%5C');
  });
});
