import {test , expect,Locator, chromium } from '@playwright/test'

test("handle tabs", async()=>{
     const browser = await chromium.launch(); // creates broswer
      const context = await browser.newContext(); //create context
     
    // await page.goto("https://testautomationpractice.blogspot.com/");
    const parentpage =await context.newPage();


    await parentpage.goto("https://testautomationpractice.blogspot.com/");
  const [childPage] =  await  Promise.all([context.waitForEvent('page'),await parentpage.locator("button[onclick='myFunction()']").click()]);
    // context.waitForEvent('page');     -- u need to run these 2 statments parallely hence u put in promise 
    // await parentpage.locator("button[onclick='myFunction()']").click();


    // switch bewwtween pages and get title 
    const pages= context.pages();
    console.log("number of pages created",pages.length)
    console.log("Title of parent page:",await pages[0].title());
    console.log("Title of child page:",await pages[1].title());

     console.log("Title of parent page:",await parentpage.title());
    console.log("Title of child page:",await childPage.title());


})