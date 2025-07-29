// import { test, expect } from '@playwright/test';
// test('Home', async ({ page }) => {
// await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204')
// await page.pause()
// await page.waitForTimeout(5000)
// })

import { test, expect } from '@playwright/test';

test('Full E2E Flow', async ({ page }) => {
  test.setTimeout(180_000); 

  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204');

  // Login
  await page.getByRole('textbox', { name: 'someone@example.com' }).fill('pavithra.govindaraj@syneoshealth.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: /Enter the password/ }).fill('Pavi@G#12345');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Handle "Don't show again" prompt
  const dontShowAgain = page.getByRole('checkbox', { name: /Don't show this again/ });
  await dontShowAgain.waitFor({ state: 'visible', timeout: 60000 });
  await dontShowAgain.check();
  await page.getByRole('button', { name: 'Yes' }).click();

  // Wait for dashboard
  await page.waitForTimeout(5000);
  await page.waitForSelector('a:has-text("7065175")', { timeout: 90000 });
  await page.getByRole('link', { name: '7065175' }).click();
  await page.waitForLoadState('networkidle', { timeout: 90000 });

  // Navigate directly to project page
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:18:11191223229176::::P0_PROJECT_CODE,P18_YEAR_DROPDOWN:\\7065175\\,1');
  await page.getByRole('link', { name: 'Central Monitor' }).click();

  // Fill monthly hours
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:238298846914::::P19_ROLE_ID,P19_YEAR:32,1');
  await page.getByRole('tab', { name: 'APAC' }).click();

  await page.locator('.DRAG_MONTH_1').first().dblclick();
  await page.getByRole('textbox', { name: 'Jul-' }).fill('2');
  await page.locator('.DRAG_MONTH_2').first().dblclick();
  await page.getByRole('textbox', { name: 'Aug-' }).fill('20');
  await page.locator('.DRAG_MONTH_3').first().dblclick();
  await page.getByRole('textbox', { name: 'Sep-' }).fill('120');
  await page.getByRole('textbox', { name: 'Sep-' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Sep-' }).fill('12');

  // Save data
  await page.getByRole('heading', { name: /Resource Requests/ }).click();
  await page.getByRole('button', { name: 'SAVE' }).click();

  // Submit resource request
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:15071710159663:::::');
  await page.getByRole('button', { name: 'SUBMIT RESOURCE REQUESTS' }).click();
  await page.getByRole('button', { name: 'YES' }).click();

  // Navigate to requests and filter
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:19:10748890751611:::::');
  await page.locator('#admin_card_breadcrumb').getByRole('img').click();
  await page.getByRole('link', { name: 'REQUESTS' }).click();
  await page.getByRole('button', { name: 'P-Code' }).click();
  await page.getByRole('searchbox', { name: 'Filter P-Code' }).fill('7065');
  await page.getByRole('option', { name: /7065175/ }).click();
  await page.getByRole('link', { name: '-0000067' }).click();

  // Fill demand page
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:30:15243943025318:::30:P30_DEMAND_ID,P30_REQUEST_ID,P0_PROJECT_CODE,P30_RD_START_DATE,P30_END_DATE,P30_RD_TOTAL_HRS,P30_S_ROLE_NAME,P30_REQUESTER_COMMENT,P30_S_REGION,P30_S_COUNTRY:\\24033\\,\\7065175-0000067\\,\\7065175\\,\\01-Jul-2025\\,\\30-Sep-2025\\,\\34\\,\\Central Monitor\\,,\\APAC\\,\\Any APAC Country\\');

  await page.getByTitle('0', { exact: true }).dblclick();
  await page.getByLabel('', { exact: true }).fill('120');
  await page.getByLabel('', { exact: true }).press('ArrowRight');
  await page.getByLabel('', { exact: true }).fill('12');
  await page.getByText('Project StatusApprovedStart').click();
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByRole('button', { name: 'YES' }).click();

  // Navigate to Direct Assign
  await page.locator('#admin_card_breadcrumb div').nth(1).click();
  await page.locator('#admin_card_breadcrumb').getByRole('img').click();
  await page.getByRole('link', { name: 'DIRECT ASSIGN' }).click();
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:118:15243943025318:::::');

  // Add Resource
  await page.getByRole('button', { name: 'ADD RESOURCE TO VIEW' }).click();
  await page.getByRole('combobox', { name: 'Select Resource' }).fill('260137');
  await page.getByText('Leo, Neethu (260137)').click();
  await page.getByRole('dialog', { name: 'Select Resource' }).locator('td').nth(1).click();
  await page.getByRole('button', { name: 'Move All' }).click();
  await page.getByRole('button', { name: 'CONFIRM' }).click();

  // Final Assignment
  await page.getByRole('checkbox', { name: 'Action' }).check();
  await page.getByRole('gridcell', { name: 'Lead' }).click();
  await page.getByRole('checkbox', { name: 'Lead' }).check();
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});
