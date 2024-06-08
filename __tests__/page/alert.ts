import { Locator, Page } from "@playwright/test"

export default class AlertPage {
    readonly page: Page
    readonly alertCardLink: Locator
    readonly simpleAlertButton: Locator
    readonly confirmAlertButton: Locator
    readonly promptAlertButton: Locator
    readonly modernAlertButton: Locator
    readonly closeAlertButton: Locator

    constructor(page: Page) {
        this.page = page
        this.alertCardLink = page.getByRole("link", { name: "Dialog" })
        this.simpleAlertButton = page.getByRole("button", { name: "Simple Alert" })
        this.confirmAlertButton = page.getByRole("button", { name: "Confirm Alert" })
        this.promptAlertButton = page.getByRole("button", { name: "Prompt Alert" })
        this.modernAlertButton = page.getByRole("button", { name: "Modern Alert" })
        this.closeAlertButton = page.getByRole("button", { name: "close" })
    }

    async navigate() {
        await this.alertCardLink.click()
    }
}