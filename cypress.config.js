
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
   /// baseUrl: 'http://localhost:3000',
   baseUrl: 'https://www.saucedemo.com',
   "chromeWebSecurity": false,
    specPattern: '**/*.feature',
    defaultCommandTimeout: 10000,
    numTestsKeptInMemory: 2,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    },
  },
})
