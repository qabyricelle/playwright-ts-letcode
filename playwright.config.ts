import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./__tests__/spec",
  reporter: [
    ["list"], 
    [
      "allure-playwright",
      {
        outputFolder: "allure-results",
        suiteTitle: true,
        detail: true,
        environmentInfo: {}
      }
    ]
  ],
  use: {
    baseURL: "https://letcode.in",
    trace: "on-first-retry",
    screenshot: "on"
  },

    projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    }
  ]
})
