import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['*.spec.ts'],
  fullyParallel: true,
  reporter: 'html',
  retries: 0,
  use: {
    trace: 'on-first-retry',
    headless: false,
    screenshot: 'on',
    video: 'on',
  },

  // ✅ Correctly placed `projects` section
  projects: [
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge', // tells Playwright to use Edge browser
      },
    },
  ],
});
