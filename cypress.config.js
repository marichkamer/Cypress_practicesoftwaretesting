import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({

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
