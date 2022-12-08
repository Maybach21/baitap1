const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://google.com.vn/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
