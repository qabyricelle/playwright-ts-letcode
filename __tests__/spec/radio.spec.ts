import { test, expect } from "@playwright/test"
import RadioPage from "../page/radio"

let radioPage: RadioPage

test.beforeEach(async ({ page }) => {
    radioPage = new RadioPage(page)

    await page.goto("/test")
    await radioPage.navigate()
})

test.describe("Radio and Checkbox", async () => {
    test("Select any one", async () => {
        await radioPage.selectAnyRadioButton.check()
    })

    test("Confirm you can select only one radio button", async ({ page }) => {
        await radioPage.selectOnlyOneRadioButton.check()
        await expect(radioPage.selectOnlyTwoRadioButton).not.toBeChecked()

        await radioPage.selectOnlyTwoRadioButton.check()
        await expect(radioPage.selectOnlyOneRadioButton).not.toBeChecked()
    })

    test("Find the bug", async () => {
        await radioPage.findTheBugRadioButton.check()
        await radioPage.findTheNoBugRadioButton.check()

        await expect(radioPage.findTheBugRadioButton).toBeChecked()
        await expect(radioPage.findTheNoBugRadioButton).toBeChecked()
    })

    // FIXME: Still does not return the value of the selected radio button.
    test("Find which one is selected", async () => {
        const text = await radioPage.findWhichOneRadioButton.allInnerTexts()
        console.log(text)
    })

    test("Confirm last field is disabled", async () => {
        await expect(radioPage.confirmDisabledRadioButton).toBeDisabled()
    })

    test("Find if the checkbox is selected", async () => {
        const isChecked = await radioPage.rememberMeCheckbox.isChecked()
        console.log(isChecked)
    })

    test.only("Accept the T&C", async () => {
        await radioPage.acceptTermsCheckbox.check()
    })
})
