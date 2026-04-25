import {test,expect,Locator} from '@playwright/test'

test("Playwright actions1",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    // 1] Type into the textbox
    const textbox:Locator=page.locator("[id='name']");
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    await textbox.fill("miku");
    const maxLength: string|null = await textbox.getAttribute("maxlength");
    console.log("Max length of the textbox is: "+maxLength);
    console.log("first name entered is :",await textbox.textContent());
    const enteredNameValue:string|null = await textbox.inputValue();
    console.log("first name entered is :",await textbox.inputValue());
    await expect(enteredNameValue).toBe("miku");
})

test("radio buttons",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const maleBtn:Locator = page.locator("[id='male']");
    await expect(maleBtn).toBeVisible();
    await expect(maleBtn).toBeEnabled();
    expect(await maleBtn.isChecked()).toBe(false);
    await maleBtn.check();
    await expect(maleBtn).toBeChecked();
})

test.only("checkboxses",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const sundayCheckBox:Locator=page.getByLabel("Sunday");
    await expect(sundayCheckBox).toBeVisible();
    await sundayCheckBox.check();
    await expect(sundayCheckBox).toBeChecked();

    // select alll checkboxses and assert eachh checkbox is checked
    await page.waitForTimeout(2000);
    const days:string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const checkBoxDays:Locator[]= days.map(index=>page.getByLabel(index));
   expect(checkBoxDays.length).toBe(7);
//    select all the checkboxes and assert each checkbox is checked
   for(let i=0;i<checkBoxDays.length;i++){
    await checkBoxDays[i].check();
    await expect(checkBoxDays[i]).toBeChecked();
   }
//    select last 3 
//    for(let i=3;i<checkBoxDays.length;i++){
//     await checkBoxDays[i].uncheck();
//     await expect(checkBoxDays[i]).not.toBeChecked();
//    }

//    via slice method select last 3 checkboxes
   for(const checkBox of checkBoxDays.slice(4)){
        await checkBox.uncheck();
        await expect(checkBox).not.toBeChecked();
   }

// slect the checkboxses which r not selected
// and unselect the checkboxses which r selected

   for(const checkBox of checkBoxDays){
    if(await checkBox.isChecked()){
        await checkBox.uncheck();
        await expect(checkBox).not.toBeChecked();
    }
    else{
        await checkBox.check();
        await expect(checkBox).toBeChecked();
    }
   }

//    randomly slect checkbox 1,3,6
    const randomIndexes:number[] = [1,3,6];
    for(const ran of randomIndexes){
        await checkBoxDays[ran].check();
        await expect(checkBoxDays[ran]).toBeChecked();
    }
    // select checkbox based on label
    const labelToSelect:string|null = "Monday";
    for(const label of days){
        if(label.toLowerCase()===labelToSelect.toLowerCase()){
            const checkBoxtoSelect=page.getByLabel(labelToSelect);
            await checkBoxtoSelect.check();
            await expect(checkBoxtoSelect).toBeChecked();
             
        }
    }

   await page.waitForTimeout(2000);


})