const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');
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
    specPattern: 'cypress/e2e/features/**/*.feature',
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
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      return config;
    },
  },
});
