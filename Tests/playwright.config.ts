// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',  // keep it './' if test files are in this folder
  use: {
    headless: false,  // Shows the browser while running
    viewport: { width: 1280, height: 720 },
  },
});
