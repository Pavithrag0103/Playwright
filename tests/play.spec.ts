import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const EMAIL = process.env.EMAIL!;
const PASSWORD = process.env.PASSWORD!;

test('Login and navigate to Central Risk Manager', async ({ page }) => {
  // Step 1: Open Login Page
  await test.step('Launch login page', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204');
    await page.waitForLoadState('domcontentloaded');
  });

  // Step 2: Enter email ID
  await test.step('Enter email ID', async () => {
    await page.getByRole('textbox', { name: 'someone@example.com' }).fill(EMAIL);
  });

  // Step 3: Enter password
  await test.step('Enter password', async () => {
    await page.getByRole('textbox', { name: 'Password' }).fill(PASSWORD);
  });

  // Step 4: Click Login
  await test.step('Click login button', async () => {
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');
  });

  // Step 5: Navigate to project role
  await test.step('Go to project role', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:18:13547338287883::::P0_PROJECT_CODE,P18_YEAR_DROPDOWN:%5C7010751%5C,1');
  });

  // Step 6: Click on Central Risk Manager
  await test.step('Click Central Risk Manager', async () => {
    await page.getByRole('link', { name: 'Central Risk Manager' }).click();
    await page.waitForTimeout(1000); // Just to simulate transition
  });

  // Step 7: Final role page
  await test.step('Navigate to role page', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204:19:1311693759671::::P19_ROLE_ID,P19_YEAR:34,1');
    await expect(page).toHaveURL(/f\?p=2204:19/);
  });
});
