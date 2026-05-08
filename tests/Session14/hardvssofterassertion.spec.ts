import{test,expect,Locator} from '@playwright/test'

test("Hard Vs Soft Assertion", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    
    //hard asserion
    await expect(page).toHaveTitle('Demo Web Shop1');
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();

    //soft aaertion
    await expect.soft(page).toHaveTitle('Demo Web Shop1');
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

    const logo1 = page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect.soft(logo1).toBeVisible();
})