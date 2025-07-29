import { test, expect } from '@playwright/test';

test('Full E2E Flow in Bid2RevRec', async ({ page }) => {
  test.setTimeout(180_000); // 3 minutes timeout

  // Step 1: Login
  await test.step('Navigate to login page', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204');
  });

  await test.step('Login using email and password', async () => {
    await page.getByRole('textbox', { name: 'someone@example.com' }).fill('pavithra.govindaraj@syneoshealth.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: /Enter the password/ }).fill('Pavi@G#12345');
    await page.getByRole('button', { name: 'Sign in' }).click();
  });

  // Step 2: Handle optional prompt
  await test.step('Handle "Don’t show this again" prompt', async () => {
    const dontShowAgain = page.getByRole('checkbox', { name: /Don't show this again/ });
    if (await dontShowAgain.isVisible({ timeout: 5000 })) {
      await dontShowAgain.check();
      await page.getByRole('button', { name: 'Yes' }).click();
    }
  });

  // Step 3: Search by P-Code
  await test.step('Search project by P-Code', async () => {
    await page.getByRole('combobox', { name: 'P-Code' }).click();
    await page.getByRole('combobox', { name: 'P-Code' }).fill('7065175');
    await page.getByRole('option', { name: '7065175' }).locator('span').first().click();
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: '7065175' }).click();
  });

  // Step 4: Navigate to Central Monitor page
  await test.step('Navigate to Central Monitor', async () => {
    await page.getByRole('link', { name: 'Central Monitor' }).click();
  });
  await page.waitForTimeout(50000)

  // Step 5: Enter resource hours in grid
  await test.step('Enter grid values for APAC role', async () => {
    await page.getByRole('tab', { name: 'APAC' }).click();
    await page.getByRole('gridcell', { name: '2', exact: true }).first().click();
    await page.getByRole('textbox', { name: 'Jul-' }).fill('3');
    await page.getByRole('textbox', { name: 'Aug-' }).fill('3');
    await page.getByRole('textbox', { name: 'Sep-' }).fill('5');
  });

  // Step 6: Save the entered data
  await test.step('Save the request', async () => {
    await page.getByRole('heading', { name: 'Resource Requests - Central' }).click();
    await page.getByRole('button', { name: 'SAVE' }).click();
  });

  // Step 7: Submit the request
  await test.step('Submit resource request', async () => {
    await page.getByRole('button', { name: 'SUBMIT RESOURCE REQUESTS' }).click();
    await page.getByRole('button', { name: 'YES' }).click();
  });

  // Step 8: Verify submitted request (navigate using UI not hardcoded URL)
  await test.step('Reopen submitted request from UI', async () => {
    await page.locator('#admin_card_breadcrumb').getByRole('img').click();
    await page.getByRole('link', { name: 'REQUESTS' }).click();
    await page.getByRole('button', { name: 'P-Code' }).click();
    await page.getByRole('searchbox', { name: 'Filter P-Code' }).fill('7065175');
    await page.getByRole('option', { name: /7065175/ }).click();
    await page.getByRole('link', { name: /-0000067/ }).click();
  });

});
