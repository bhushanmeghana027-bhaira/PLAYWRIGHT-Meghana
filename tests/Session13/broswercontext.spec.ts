import {test,expect,Locator, chromium,firefox} from '@playwright/test'
// broswe: firefox,edge,chrome

// cintext: we can create multiple context for multiple users/spps for thr same broser
// provide a way to operate multiple indepnedent browser sessions

// pages:tab.window,popup
test("broser context", async() => {
    const browser = await chromium.launch(); // creates broswer
      const context = await browser.newContext(); //create context
     
    // await page.goto("https://testautomationpractice.blogspot.com/");
    const page1 =await context.newPage();
    const page2 =await context.newPage();
    console.log("no.of pages created using this context :",context.pages().length);

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await expect(page1).toHaveTitle("Automation Testing Practice");
    await page2.goto("https://ui.vision/demo/webtest/frames/");
    await expect(page2).toHaveTitle("Frames - Web Automation Test");

    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);

})