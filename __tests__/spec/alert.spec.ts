import { test, expect } from "@playwright/test"
import AlertPage from "../page/alert"

let alertPage: AlertPage

test.beforeEach(async ({ page }) => {
    alertPage = new AlertPage(page)

    await page.goto("/test")
    await alertPage.navigate()
})

test.describe("Alert", async () => {
    test("Accept the alert", async ({ page }) => {
        page.on("dialog", (dialog) => {
            dialog.accept()
        })
        await alertPage.simpleAlertButton.click()
    })

    test("Dismiss the alert and print the alert text", async ({ page }) => {
        page.on("dialog", (dialog) => {
            console.log(dialog.message())
            dialog.dismiss()
        })
        await alertPage.confirmAlertButton.click()
    })

    test("Type your name and accept", async ({ page }) => {
        page.on("dialog", (dialog) => {
            dialog.accept("Kitty")
        })
        await alertPage.promptAlertButton.click()
    })

    test("Sweet alert", async ({ page }) => {
        await alertPage.modernAlertButton.click()
        await alertPage.closeAlertButton.click()
    })
})