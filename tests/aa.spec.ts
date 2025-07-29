import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Load variables from .env

// Set a higher timeout globally
test.setTimeout(60000);

const EMAIL = process.env.EMAIL!;
const PASSWORD = process.env.PASSWORD!;

test('Full login and resource request flow', async ({ page }) => {
  // Step 1: Launch login page
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204');
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
  await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=1204:18');