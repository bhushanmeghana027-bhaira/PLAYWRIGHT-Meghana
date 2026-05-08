import {test,expect,Locator} from '@playwright/test'

test("Autowaiting timesouts" , async ({page})=>{
    test.setTimeout(50000);  // this is how we set timeout waits for 50 sec , this os for test
    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

// u can add time wait for expect 
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});

    await page.locator("#small-searchterms").fill("Laptop",{force:true}); // it will not wait for the auto wait conditions to bechecked 
    // await page.locator("#ui-id-4").click({force:true});
    // await page.locator(".button-1 search-box-button").click();
    await page.keyboard.press("Enter");
})