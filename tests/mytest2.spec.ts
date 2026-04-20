import {test,expect} from "@playwright/test";

test('verify url',async ({page})=>{
    await page.goto("https://www.saucedemo.com/")
    let url_of_thePage:string =await page.url();
    console.log("URL of the page is ",url_of_thePage);
    await expect(page).toHaveURL("https://www.saucedemo.com/");



})
