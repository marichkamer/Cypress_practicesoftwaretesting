import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",

    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
