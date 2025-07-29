import { test, expect } from '@playwright/test';

test('Launch login page', async ({ page }) => {
  await test.step('Go to login page', async () => {
    await page.goto('https://bid2revrec-dev.syneoshealth.com/ords/f?p=2204');
    await page.pause(); // Optional: lets you debug manually in browser
  });
});
