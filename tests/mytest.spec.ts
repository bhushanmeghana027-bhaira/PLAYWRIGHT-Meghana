import {test,expect} from "@playwright/test";


// test("title of the test", ()=>{
// })

//ficxtutre = global variable
test("verify page title",async ({page})=>{
    await page.goto("https://www.saucedemo.com/")
    let title_of_page:string = await page.title();
    let url_of_page:string = await page.url();
    console.log("title is ",title_of_page);
    console.log("URL is ",url_of_page);
    await expect(page).toHaveTitle("Swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/");

})





