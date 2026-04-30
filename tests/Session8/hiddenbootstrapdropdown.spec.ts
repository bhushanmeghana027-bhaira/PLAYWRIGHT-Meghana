import {test,expect,Locator} from '@playwright/test'

test("Hidden boot strap dorp down", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();
    const bannerlogo:Locator = page.locator("[alt='client brand banner']");
    await expect(bannerlogo).toBeVisible();

    // clicked on pim
    await page.getByText("PIM").click();
    // clicked on jpb title
    await page.locator("form i").nth(2).click();

    const optons:Locator=page.locator("div[role='listbox'] span");
    const count = await optons.count();

    //print all the options
    for(let i=0;i<count;i++){
        console.log(await optons.nth(i).innerText());

    }
    for(let i=0;i<count;i++){
       const text:string= await optons.nth(i).innerText();
    if(text==='QA Lead'){
        await optons.nth(i).click();
        break;
    }
    }
})