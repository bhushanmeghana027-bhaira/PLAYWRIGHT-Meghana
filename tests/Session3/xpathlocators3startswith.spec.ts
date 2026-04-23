import {test,expect,Locator} from '@playwright/test'

test("xpath locators starts withh",async({page}) => {
    await page.goto("https://automationexercise.com/");

    const productTitles:Locator = page.locator("//img[starts-with(@alt,'ecommerce website products')]/parent::div/p");
    const productCount:number = await productTitles.count();
    console.log("Number of products: " + productCount);
    await expect(productCount).toBeGreaterThan(0);


    const homeLink:Locator = page.locator("xpath=//a[text()=' Home']");
    await expect(homeLink).toBeVisible();
    
})