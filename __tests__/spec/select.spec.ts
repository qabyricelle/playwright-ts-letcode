import { test } from '@playwright/test'
import SelectPage from '../page/select'

let selectPage: SelectPage

test.beforeEach(async ({ page }) => {
     selectPage = new SelectPage(page)

     await page.goto('/test')
     await selectPage.navigate()
})

test.describe('Select', async () => {
     test('Select the apple using visible text', async () => {
          await selectPage.selectVisibleTextDropdown.selectOption({
               label: 'Apple',
          })
     })

     test('Select your super heroes', async ({ page }) => {
          const superheroes = ['Doctor Strange', 'Thor', 'Wonder Woman']
          await selectPage.selectSuperHeroDropdown.selectOption(
               superheroes.map(function (heroes) {
                    return { label: heroes }
               })
          )
     })

     test('Select the last programming language and print all the options', async () => {
          const lastOption: any = await selectPage.selectLastDropdown.evaluate(
               (e) => e.lastElementChild?.textContent
          )
          await selectPage.selectLastDropdown.selectOption({
               label: lastOption,
          })

          const options = await selectPage.selectLastDropdown.innerText()
          console.log(options)
     })

     test('Select India using value & print the selected value', async () => {
          await selectPage.selectByValueDropdown.selectOption({
               value: 'India',
          })
          const value = await selectPage.selectByValueDropdown.inputValue()
          console.log(value)
     })
})
