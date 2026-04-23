import {test,expect,Locator} from '@playwright/test'

test ("Xpath locators",async ({page}) => {
    await page.goto("https://automationexercise.com/");

    const Products:Locator=page.locator("xpath=(//div[@class='productinfo text-center']/p)")
    const productsCount :number= await Products.count();
    console.log("Number of products: " + productsCount);
    expect(productsCount).toBeGreaterThan(0);

    const firstProductName:string |null = await Products.first().textContent();
    console.log("Name of the first product: " + firstProductName);

    const lastProductName:string |null = await Products.last().textContent();
    console.log("Name of the last product: " + lastProductName);

    const nthProductName:string|null =await Products.nth(3).textContent();
    console.log("Name of the 4th product: " + nthProductName);

    const allProductNames:string[] = await Products.allTextContents();
    console.log("all the product names: " + allProductNames);
    for(let productTitle of allProductNames){
        console.log(productTitle);
    }

})