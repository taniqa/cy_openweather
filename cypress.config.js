const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1680,
  viewportHeight: 1050,
  defaultCommandTimeout: 7000,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://openweathermap.org',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})