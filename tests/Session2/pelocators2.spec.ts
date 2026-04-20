import {test,expect,Locator} from '@playwright/test'

test("validating dempoqa page",async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form");
    await expect(page.getByRole("heading",{name:'Practice Form'})).toBeVisible();
    await page.getByRole("textbox",{name:'First Name'}).fill("Bhairava");
    // await page.getByRole("textbox",{name:'Last Name'}).fill("Bhushan");

    // 3] getByPlaceholder
    await page.getByPlaceholder('Last Name').fill("bhushan");

    // 4]getByRole
    await page.getByRole("textbox",{name:'name@example.com'}).fill('abc@gmail.com');
    // await page.getByLabel('Email').fill("bhushan123@gmail.com");
    await page.getByRole("radio",{name:'Male', exact: true}).click();

    // 5]getByTile
    await page.getByTitle("hobbies-checkbox-1").click();

})

