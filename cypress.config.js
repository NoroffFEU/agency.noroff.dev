require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    // Mariusz Rozycki as QA-phoenix
    // I changed baseUrl from 'http://127.0.0.1:4173/' to 'http://127.0.0.1:5173/ (according readme.md in project)
    baseUrl: 'http://127.0.0.1:5173/.', // 'http://127.0.0.1:4173/', // this is the Vite build server, not the dev server
    video: false,
    setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        ...config.env,
        username: 'cypress-test@noroff.no',
        password: 'czv4euj*ncv6NUG@aqy', // when a user gets more permissions, this should be changed to not reveal the password
      };
      return config;
    },
  },
});
