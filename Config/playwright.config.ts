import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',           // Adjust if your test folder is named differently
  timeout: 30 * 1000,           // 30 seconds timeout per test
  retries: 0,                   // You can set 1 or 2 if you want retry on failure
  use: {
    headless: false,           // Set true if you don't want browser UI
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
  { name: 'Microsoft Edge', use: { channel: 'msedge' } },
  //{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  //{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  //{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
],
});
