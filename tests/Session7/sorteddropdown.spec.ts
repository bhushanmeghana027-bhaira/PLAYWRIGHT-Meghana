import {test,expect,Locator} from '@playwright/test'

test("sorted drop down",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator("#colors>option");
    // console.log(await dropdownOptions.allTextContents());
    const optionsText:string[] =(await dropdownOptions.allTextContents()).map(text=>text.trim());

    const orginalList:string[]=[...optionsText];
    const sortedList:string[]=[...optionsText.sort()];
    console.log('Orginal List is ',orginalList);
    console.log('Sorted list',sortedList);
    expect(orginalList).toEqual(sortedList);
        await page.waitForTimeout(3000); 

})