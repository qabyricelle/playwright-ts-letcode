import { test, expect } from "@playwright/test"
import InputPage from "../page/input"

let inputPage: InputPage

test.beforeEach(async ({ page }) => {
    inputPage = new InputPage(page)

    await page.goto("/test")
    await inputPage.navigate()
})

test.describe("Input", async () => {
    test("Enter your full name", async () => {
        await inputPage.fullNameTextbox.fill("Aphrodite")
    })

    test("Append a text and press keyboard TAB", async () => {
        await inputPage.appendATextbox.focus()
        await inputPage.appendATextbox.evaluate(
            "e => e.setSelectionRange(-1, -1)"
        )
        await inputPage.appendATextbox.pressSequentially("APPENDED ")
        await inputPage.appendATextbox.press("Tab")
    })

    test("What is inside the text box", async () => {
        const value = await inputPage.whatIsInsideTextbox.inputValue()
        console.log(value)
    })

    test("Confirm edit field is disabled", async () => {
        await expect(inputPage.disabledTextbox).toBeDisabled()
    })

    test("Confirm text is readonly", async () => {
        await expect(inputPage.readonlyTextbox).not.toBeEditable()
    })
})
