import {test,expect,Locator} from '@playwright/test'

test("basiclocators",async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
    const title = await page.getByAltText("Tricentis Demo Web Shop");
     await expect(page).toHaveTitle("Demo Web Shop");
    const header = await title.getAttribute("alt");

    await expect(header).toBe("Tricentis Demo Web Shop");

    // click on login 
    await page.getByRole('link',{name:'Log in'}).click();
    await page.waitForTimeout(10000);
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");

    // fill email
    // await page.getByLabel('Email:').fill("acb123@gmail.com");
    // await page.getByLabel('Password:').fill("Test@1234");
    // await page.getByRole('button',{name:'Log in'}).click();

    // task2 
    // remeber checkbox
    await page.getByRole('checkbox',{name:'Remember Me?'}).check();
    // click register link 
    await page.getByRole('button',{name:'Register'}).click();
})

test.only("basiclocator for getByText",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const title = await page.getByAltText("Tricentis Demo Web Shop");
    await expect(page).toHaveTitle("Demo Web Shop");
    const header = await title.getAttribute("alt");
    await expect(header).toBe("Tricentis Demo Web Shop");

    // await expect(page.getByText("Welcome to our store")).toBeVisible();
    // await page.getByText("Log in").click();
    // await page.waitForTimeout(10000);
    // await page.getByText("Email:").fill("abgd@gmail.com");
    // await page.getByText("Password:").fill("Test@1234");

    await page.getByRole('link', { name: 'Books' }).first().click();
    await page.getByRole('button',{name:'Add to cart'}).nth(0).click();
    await page.getByText("Shopping cart").nth(0).click();
    const quantity = await page.getByRole('link',{name:'Computing and Internet'});
    const nameofquanti = await quantity.nth(0).innerText();
    console.log(nameofquanti);
    await expect(nameofquanti).toBe("Computing and Internet");

     expect(quantity).toBe(1);

    
})