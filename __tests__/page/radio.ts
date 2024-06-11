import { Locator, Page } from "@playwright/test"

export default class RadioPage {
    readonly page: Page
    readonly radioLink: Locator
    readonly selectAnyRadioButton: Locator
    readonly selectOnlyOneRadioButton: Locator
    readonly selectOnlyTwoRadioButton: Locator
    readonly findTheBugRadioButton: Locator
    readonly findTheNoBugRadioButton: Locator
    readonly findWhichOneRadioButton: Locator
    readonly confirmDisabledRadioButton: Locator
    readonly rememberMeCheckbox: Locator
    readonly acceptTermsCheckbox: Locator

    constructor(page: Page) {
        this.page = page
        this.radioLink = page.getByRole("link", { name: "Toggle" })
        this.selectAnyRadioButton = page.locator("#yes")
        this.selectOnlyOneRadioButton = page.locator("#one")
        this.selectOnlyTwoRadioButton = page.locator("#two")
        this.findTheBugRadioButton = page.locator("#bug")
        this.findTheNoBugRadioButton = page.locator("#nobug")
        this.findWhichOneRadioButton = page.locator(".radio [name='foobar'][checked]")
        this.confirmDisabledRadioButton = page.locator("#maybe")
        this.rememberMeCheckbox = page.getByRole("checkbox", { name: "Remember me" })
        this.acceptTermsCheckbox = page.getByRole("checkbox").nth(1)
    }

    async navigate() {
        await this.radioLink.click()
    }
}