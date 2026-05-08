import {test , expect } from '@playwright/test'

test("handle tabs", async({browser})=>{ 
    // u will use this line if u use first approach 
        // const context = await browser.newContext();

        // u will use this line if u use second approach
        const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}}); //create context
        // first write httpCredentials:{}
        const page =await context.newPage();

        // // approach1 :allong with url 
        // await page.goto("https:admin:admin@the-internet.herokuapp.com/basic_auth");
        // // https://the-internet.herokuapp.com/basic_auth
        // // https:username:password@the-internet.herokuapp.com/basic_auth
        // await page.waitForLoadState(); //waits for th page to load complettly 

        // await expect(page.locator('text=Congratulations')).toBeVisible();
        // await page.waitForTimeout(5000);



        // approach 2 : pas the credentials along with the browser context

         await page.goto("https://the-internet.herokuapp.com/basic_auth");
     
        await page.waitForLoadState(); //waits for th page to load complettly 

        await expect(page.locator('text=Congratulations')).toBeVisible();
        await page.waitForTimeout(5000);


})