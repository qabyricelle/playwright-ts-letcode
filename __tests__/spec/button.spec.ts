import { test, expect } from "@playwright/test"
import ButtonPage from "../page/button"

let buttonPage: ButtonPage

test.beforeEach(async ({ page }) => {
    buttonPage = new ButtonPage(page)

    await page.goto("/test")
    await buttonPage.navigate()
})

test.describe("Button", async () => {
    test("Go to home and come back here using driver command", async ({ page }) => {
        await buttonPage.goHomeButton.click()
        await page.goBack()
    })

    test("Get the X & Y coordinates", async () => {
        const value = await buttonPage.findLocationButton.boundingBox()
        console.log("X: " + value?.x + " and Y: " + value?.y)
    })

    test("Find the color of the button", async () => {
        const value = await buttonPage.whatColorButton.evaluate(
            (e) => window.getComputedStyle(e)
            .getPropertyValue("background-color"))
        console.log(value)
    })

    test("Find the height & width of the button", async () => {
        const width = await buttonPage.whatSizeButton.evaluate(
            (e) => window.getComputedStyle(e)
            .getPropertyValue("width"))
        const height = await buttonPage.whatSizeButton.evaluate(
            (e) => window.getComputedStyle(e)
            .getPropertyValue("height"))
        console.log("Height: " + height + " and Width: " + width)
    })

    test("Confirm button is disabled", async () => {
        await expect(buttonPage.disabledButton).toBeDisabled()
    })

    test("Click and hold button", async ({ page }) => {
        await buttonPage.holdButton.hover()
        await page.mouse.down({ clickCount: 5 })
        await expect(buttonPage.holdButton).toContainText("Button has been long pressed")
    })
})
