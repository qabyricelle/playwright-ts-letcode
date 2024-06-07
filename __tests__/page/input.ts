import { Locator, Page } from "@playwright/test"

export default class InputPage {
    readonly page: Page
    readonly inputCardLink: Locator
    readonly fullNameTextbox: Locator
    readonly appendATextbox: Locator
    readonly whatIsInsideTextbox: Locator
    readonly clearTheTextBox: Locator
    readonly disabledTextbox: Locator
    readonly readonlyTextbox: Locator

    constructor (page: Page) {
        this.page = page
        this.inputCardLink = page.getByRole("link", { name: "Edit" })
        this.fullNameTextbox = page.locator("#fullName")
        this.appendATextbox = page.locator("#join")
        this.whatIsInsideTextbox = page.locator("#getMe")
        this.clearTheTextBox = page.locator("#clearMe")
        this.disabledTextbox = page.locator("#noEdit")
        this.readonlyTextbox = page.locator("#dontwrite")
    }

    async navigate () {
        await this.inputCardLink.click()
    }
}