import {test,expect,Locator} from '@playwright/test'

test("Single select dropdown",async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator("#country").selectOption('India'); //visibletext
    // await page.locator("#country").selectOption({value:'uk'}); //value
    // await page.locator("country").selectOption({label:'India'}); //label
   await  page.locator("#country").selectOption({index:3}); //index
    await expect(page.locator("#country")).toHaveValue("germany");


    // 2] check the number of options in te dropdown
    const dropdownOptions:Locator= page.locator("#country>option");
    await expect(dropdownOptions).toHaveCount(10);
    const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text => text.trim());
    console.log(optionsText);
    // optionsText.map(name => )
    // 3 check an poption is present or not
     expect(optionsText).toContain("Japan");

    //  4]prinitng all the options from the dropdown
    for(const opt of optionsText){
        console.log(opt)
    }
    


})