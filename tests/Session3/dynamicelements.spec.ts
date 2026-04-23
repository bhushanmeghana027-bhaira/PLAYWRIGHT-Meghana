import {test,expect,Locator} from '@playwright/test'

test("Dynamic elements", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        const title:Locator = page.locator("xpath=//h1[@class='title']");
        await expect(title).toContainText("Automation Testing Practice");

        for(let i=0;i<5;i++){
           let button:Locator= page.locator("xpath=//button[@name='start']")
            await button.click();
            await page.waitForTimeout(5000);
        }


})