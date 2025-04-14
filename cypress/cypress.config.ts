import { defineConfig } from 'cypress';
import fs from 'fs';

export default defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  videoCompression: true,
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
  },
  setupNodeEvents(on, config) {
    // Delete screenshots before tests run
    if (fs.existsSync('cypress/screenshots')) {
      fs.rmSync('cypress/screenshots', { recursive: true, force: true });
    }
  }
});
