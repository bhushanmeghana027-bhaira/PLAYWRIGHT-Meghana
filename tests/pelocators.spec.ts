import {test,expect,Locator} from '@playwright/test';


test("verify pw locators",async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    // 1] get byAltTexr
    const logo:Locator= page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();
    // 2] getByText
    page.getByText("Welcome to our store");
    await expect(page.getByText("Welcome to our store")).toBeVisible();
    await page.getByRole("link",{name: 'Register'}).click();
    //   await expect(page).toHaveURL(/register/);
    // // await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
    // await expect(page.getByText("Register")).toBeVisible();


})