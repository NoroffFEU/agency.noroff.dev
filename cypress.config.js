/* global _:readonly */

require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      config.env = {
        baseUrl: 'http://127.0.0.1:5173/',
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});