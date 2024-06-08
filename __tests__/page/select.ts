import { Locator, Page } from "@playwright/test"

export default class InputPage {
    readonly page: Page
    readonly selectCardLink: Locator
    readonly selectVisibleTextDropdown: Locator
    readonly selectSuperHeroDropdown: Locator
    readonly selectLastDropdown: Locator
    readonly selectByValueDropdown: Locator

    constructor (page: Page) {
        this.page = page
        this.selectCardLink = page.getByRole("link", { name: "Drop-Down" })
        this.selectVisibleTextDropdown = page.locator("#fruits")
        this.selectSuperHeroDropdown = page.locator("#superheros")
        this.selectLastDropdown = page.locator("#lang")
        this.selectByValueDropdown = page.locator("#country")
    }

    async navigate () {
        await this.selectCardLink.click()
    }
}