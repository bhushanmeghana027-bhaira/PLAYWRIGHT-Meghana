import {test,expect,Locator} from '@playwright/test'


test("autosuggestdropdown",async({page})=>{
    // await page.goto("https://www.flipkart.com/")
    // page.locator("[role='button']").click();
    // page.locator("//form[@class='lilxh_ header-form-search isa71P']//input[@placeholder='Search for Products, Brands and More']").fill("smart");

    // const options : Locator= await page.locator("ul>li");
    // const count = await options.count();
    // console.log("total number of options:",count)

    await page.goto("https://www.google.com/");
    page.locator("[id='APjFqb']").fill("smart");
    const options:Locator = await page.locator("ul[role='listbox'] > li");
    const count = await options.count();
    console.log("total number of options:",count);
    //printng all sugessted dropdown
    // console.log(await options.nth(5).innerText());
    for(let i=0;i<count;i++){
       const text = await options.nth(i).innerText();
       if(text === 'smartbazar'){
         options.nth(i).click();
        break;
       }
        // console.log(await options.nth(i).textContent());
    }
})