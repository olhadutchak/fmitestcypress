const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require("cy-verify-downloads");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require("@cypress/webpack-preprocessor");
const path = require("path");

module.exports = defineConfig({
  chromeWebSecurity: false,
  downloadsFolder: "cypress/downloads",
  viewportWidth: 1200,
  viewportHeight: 800,
  pageLoadTimeout: 130000,
  retries: {
    runMode: 4,
    openMode: 1,
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{feature,cy.js}",
    supportFile: "cypress/support/e2e.js", 
    async setupNodeEvents(on, config) {
      
      await addCucumberPreprocessorPlugin(on, config);
      const options = {
        webpackOptions: {
          resolve: {
            alias: {
              "@pages": path.resolve(__dirname, "cypress/e2e/pages"),
            },
            fallback: {
              fs: false,
              path: require.resolve("path-browserify"), 
              crypto: false,
            },
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      };

      on("file:preprocessor", webpack(options));
      on('task', {
        ...verifyDownloadTasks,
      });
      return config;
    },
  },
});
