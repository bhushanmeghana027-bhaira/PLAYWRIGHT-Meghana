import {test,expect,Locator} from '@playwright/test'

test("get by placeholder",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("meghana");
    await page.getByPlaceholder("Password").fill("Test@1234");
    await page.getByRole("button",{name:'Login'}).click();
})