import {test,expect,Locator} from '@playwright/test'
// faky test:
// tc that are not stable bcz one timeit pass 2nd time fail, thirs time pass 
// so u introduce falky tets which has retry option 
// it rtries the number of times u have mentioned


test ("flaky test  demo", async({page})=>{
    
    await page.goto("https://demoblaze.com/index.html");
    await page.getByRole('link',{name:"Log in"}).click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.getByRole('button',{name:"Log in"}).click();
    await page.waitForTimeout(8000);
    const logoutLocator = await page.locator("#logout2");
    await expect(logoutLocator).toBeVisible();
    

})