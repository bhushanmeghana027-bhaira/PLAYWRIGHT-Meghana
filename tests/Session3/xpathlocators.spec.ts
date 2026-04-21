import {test,expect,Locator} from '@playwright/test'

test("Xpath locators",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/broken_images");

    // 1] absolute xpath
    const absolutelogo:Locator= page.locator("xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/img[3]");
    await expect(absolutelogo).toBeVisible();

      // 2] relative xpath
    const relativelogo:Locator= page.locator("xpath=//img[@src='img/avatar-blank.jpg']");
    await expect(relativelogo).toBeVisible();


})