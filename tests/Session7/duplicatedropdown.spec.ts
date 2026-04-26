import {test,expect,Locator} from '@playwright/test'

test("sorted drop down",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdownOptions:Locator=page.locator("#animals>option"); //not having duplicates
    // const dropdownOptions:Locator=page.locator("#colors>option"); //have duplicate

    const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text => text.trim());
    const myset = new Set<string>();
    const duplicates:string[]=[];
    for(const text of optionsText){
        if(myset.has(text)){
            duplicates.push(text);
        }
        else{
            myset.add(text);
        }
    }
    console.log("duplicate options:",duplicates);
    if(duplicates.length>0){
        console.log("diplicates found:",duplicates);
    }
    else{
        console.log("no duplicates found");
    }
    expect(duplicates.length).toBe(0);


})