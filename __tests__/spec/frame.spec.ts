import { test, expect } from "@playwright/test"
import FramePage from "../page/frame"

let framePage: FramePage

test.beforeEach(async ({ page }) => {
    framePage = new FramePage(page)

    await page.goto("/test")
    await framePage.navigate()
})

test.describe("Frame", async () => {
    test("First Name", async () => {
        await framePage.firstNameTextbox.fill("John")
    })

    test("Last Name", async () => {
        await framePage.lastNameTextbox.fill("Doe")
    })

    test("Email", async () => {
        await framePage.emailTextbox.fill("johndoe@example.com")
    })
})