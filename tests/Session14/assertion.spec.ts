import {test,expect,Locator} from '@playwright/test'

test("Assertion demo" , async ({page})=>{
    
    await page.goto("https://demowebshop.tricentis.com/");

    // 1.auto retrying asserttion - automatically retries untill it passes or waits
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

    // auto-rety : waits for the elements to be visible and have expected text 
    await expect(page.locator('text=Welcome to our store')).toBeVisible();
    await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products");

    // 2.non retrying assertions(executs imeediately , no retry)
    const title = await page.title();
    expect(title.includes('Demo Web Shop')).toBeTruthy(); // no retry 

    const welcometext = await page.locator('text=Welcome to our store').textContent();
    expect(welcometext).toContain('Welcome');


    // 3.Negating matcher
    await page.locator('text=Welcome to our store').not.toBeVisible();
    expect(welcometext).not.toContain('Welcome');
})