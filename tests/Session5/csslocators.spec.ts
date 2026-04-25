import {test,expect,Locator} from '@playwright/test'

test("Css locators",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const logo:Locator = page.getByAltText("orangehrm-logo").last();
    await expect(logo).toBeVisible();

    await page.locator("[placeholder='Username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();

    const orangeHRMTitle:Locator = page.getByTitle("OrangeHRM");
    await expect(page).toHaveTitle("OrangeHRM");




    
})