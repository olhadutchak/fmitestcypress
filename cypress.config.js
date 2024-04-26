const { defineConfig } = require("cypress");
const {verifyDownloadTasks} = require('cy-verify-downloads');

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1200,
  viewportHeight: 800,
  pageLoadTimeout: 130000,
  retries: { 
    runMode: 4,
    openMode: 1,
  } ,
  e2e: {
    setupNodeEvents(on, config) {
     on('task', verifyDownloadTasks)
    },
  },
});
