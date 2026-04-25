import {test,expect,Locator} from '@playwright/test'

test("css locators2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1] tag and id
    page.locator("input#name").fill("Megha");

    // 2] tag and class
    page.locator("input.wikipedia-search-input").fill("Playwright");

    // 3] tag and attribute
    page.locator("input[id='email']").fill("megha@example.com");

    // 4] tag and multiple attributes
    page.locator("input.form-check-input[id='tuesday']").check();



})