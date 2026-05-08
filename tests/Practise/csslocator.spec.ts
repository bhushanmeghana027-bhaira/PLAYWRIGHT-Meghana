import {test,expect,Locator} from '@playwright/test'

test("css locator",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page).toHaveTitle("Demo Web Shop");

    await page.locator("[class='ico-login']").click();
    await page.locator("[id='Email']").fill("bahah");
    await page.locator("a[href='/books']").first().click();
    await page.locator("[type='submit']").first().click();

    const product = await page.locator("ul.list  li a");
    const prosize= await product.count();
    for(let i=0;i<prosize;i++){
        console.log(await product.nth(i).innerText());

    }
    const texts = await page.locator("ul.top-menu li a").allTextContents();
console.log(texts);

})