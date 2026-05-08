import {test,expect,Locator} from '@playwright/test'
// PAGE.DIALOG SHLD B USED BEFORE CLICKING THE DAILOGUE

test("dailogue box or alert boxses", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog',(dialog) => {
        console.log("Dailogue type is :",dialog.type());
          expect(dialog.type()).toContain('alert');
        console.log("Dailogue text is :",dialog.message());
        expect(dialog.message()).toContain('I am alert box');
        dialog.accept()});
    
    await page.locator("#alertBtn").click();
    await page.waitForTimeout(5000);
})

test("confirmation dialog  or alert boxses", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog',(dialog) => {
        console.log("Dailogue type is :",dialog.type());
          expect(dialog.type()).toContain('confirm');
        console.log("Dailogue text is :",dialog.message());
        expect(dialog.message()).toContain('Press a button');
        dialog.accept(); //closes a dialog by clicking accept
        // dialog.dismiss(); //closes a dialog by clicking dismiss

        });
    
    await page.locator("#confirmBtn").click();
    const text:string=await page.locator("#demo").innerText();
    console.log("output text:",text);
    await expect(page.locator("#demo")).toHaveText("You pressed OK!")
    await page.waitForTimeout(5000);
})


test.only("prompt dialog  or alert boxses", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog',(dialog) => {
        console.log("Dailogue type is :",dialog.type());
          expect(dialog.type()).toContain('prompt');
          expect(dialog.defaultValue()).toContain("Harry Potter");
        console.log("Dailogue text is :",dialog.message());
        expect(dialog.message()).toContain('Please enter your name');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        dialog.accept("John"); //closes a dialog by clicking accept
        // dialog.dismiss(); //closes a dialog by clicking dismiss

        });
    
    await page.locator("#promptBtn").click();
    const text:string=await page.locator("#demo").innerText();
    console.log("output text:",text);
    await expect(page.locator("#demo")).toHaveText("Hello John! How are you today?");
    await page.waitForTimeout(5000);
})