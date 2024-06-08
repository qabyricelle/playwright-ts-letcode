import { FrameLocator, Locator, Page } from "@playwright/test"

export default class FramePage {
    readonly page: Page
    readonly frameCardLink: Locator
    readonly outerFrame: FrameLocator
    readonly innerFrame: FrameLocator
    readonly firstNameTextbox: Locator
    readonly lastNameTextbox: Locator
    readonly emailTextbox: Locator

    constructor(page: Page) {
        this.page = page
        this.frameCardLink = page.getByRole("link", { name: "Inner HTML" })
        this.outerFrame = page.frameLocator("#firstFr")
        this.innerFrame = this.outerFrame.frameLocator("iframe.has-background-white")
        this.firstNameTextbox = this.outerFrame.getByPlaceholder("Enter name")
        this.lastNameTextbox = this.outerFrame.getByPlaceholder("Enter email")
        this.emailTextbox = this.innerFrame.getByPlaceholder("Enter email")
    }

    async navigate() {
        await this.frameCardLink.click()
    }
}