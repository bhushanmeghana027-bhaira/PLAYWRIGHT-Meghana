import {test,expect,Locator} from '@playwright/test'

test("Xpath", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    // await expect(page.getByRole('link',{name:''})).toBeVisible();

    // xpath for login 
    await page.locator("//a[text()='Log in']").click();
    // xpath - email 
    await page.locator("//input[@id='Email']").fill("Bhairava");
    // xpath for search btn 
    await page.locator("(//input[contains(@type,'submit')])[1]");
    // xpath for books 
    await page.locator("(//a[contains(text(),'Books')])[1]").click();
    // xpathh for email
    await page.locator("//input[contains(@id,'Email')]");
    await page.locator("//starts-with[contains(@id,'Email')]");

    
})