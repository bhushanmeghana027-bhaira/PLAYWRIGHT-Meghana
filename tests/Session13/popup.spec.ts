import {test , expect } from '@playwright/test'

test("handle tabs", async({browser})=>{ 
        const context = await browser.newContext(); //create context
        const page =await context.newPage();
        await page.goto("https://testautomationpractice.blogspot.com/");


        // multiple popuups
        
        // page.waitForEvent('popup');
        // await page.locator("#PopUp").click();
        await Promise.all([page.waitForEvent('popup'), page.locator("#PopUp").click()]);
        const allPopulationWindows=context.pages();
        console.log("number of pages/windows:",allPopulationWindows.length);

        // console.log(allPopulationWindows[0].url());
        // console.log(allPopulationWindows[1].url());

        for(const pw of allPopulationWindows){
            const title = pw.title();
            if((await title).includes('Selenium')){
                await pw.getByRole('link',{name:"Register now!"}).click();
                await pw.close();
            }
        }
        await page.waitForTimeout(5000);

})