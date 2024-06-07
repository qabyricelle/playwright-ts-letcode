import { Locator, Page } from "@playwright/test"

export default class ButtonPage {
    readonly page: Page
    readonly buttonCardLink: Locator
    readonly goHomeButton: Locator
    readonly findLocationButton: Locator
    readonly whatColorButton: Locator
    readonly whatSizeButton: Locator
    readonly disabledButton: Locator
    readonly holdButton: Locator

    constructor (page: Page) {
        this.page = page
        this.buttonCardLink = page.getByRole("link", { name: "Click" })
        this.goHomeButton = page.locator("#home")
        this.findLocationButton = page.locator("#position")
        this.whatColorButton = page.locator("#color")
        this.whatSizeButton = page.locator("#property")
        this.disabledButton = page.locator("#isDisabled").nth(0)
        this.holdButton = page.locator("#isDisabled").nth(1)
    }

    async navigate () {
        await this.buttonCardLink.click()
    }
}