require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      USER_EMAIL: process.env.USER_EMAIL,
      USER_PASSWORD: process.env.USER_PASSWORD,
    },
    expose: {
      BASE_API_URL: process.env.BASE_API_URL,
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'spec, mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/html',
        overwrite: false,
        html: false, // per-spec HTML skipped; generated once after merge
        json: true,
      },
    },
    setupNodeEvents(on, config) {},
  },
});
