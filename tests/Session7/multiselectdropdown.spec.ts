import {test,expect,Locator} from '@playwright/test'

test("multiselect dropdown",async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1)select option from dropdown by visible test 
    // await page.locator("#colors").selectOption(['Red','Blue','green']);
    // using value 
    // await page.locator("#colors").selectOption(['red','white','green']);
    // using label
    // await page.locator("#colors").selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]);
    // using index
    await page.locator("#colors").selectOption([{index:0},{index:4},{index:1}]);


    // 2] count number of options 
    const dropdownOptions:Locator= page.locator("#colors>option");
     await expect(dropdownOptions).toHaveCount(7);

    // 3] check option is present or nor
    const optionText:string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    expect(optionText).toContain('Green');

    //4]printing all option from dropdown
    for(const texte of optionText) {
        console.log(texte);
    }
})