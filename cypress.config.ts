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
    setupNodeEvents(on, config) {
      console.log('baseUrl:', config.baseUrl);
      return config;
    },
  },
});
