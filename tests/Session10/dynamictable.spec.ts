import {test,expect,Locator} from '@playwright/test'

test("dynamiclocator",async({page}) =>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table:Locator=page.locator("[class='table table-striped'] tbody");
    await expect(table).toBeVisible();
    // find number of rows 
    const rows:Locator[]=await table.locator("tr").all();

    console.log("Number of rows in atable:",rows.length);
    await expect(rows).toHaveLength(4);

    // step1: for chrome procsses get value of cpu load 
    let cpuLoad="";
    for(const row of rows){
        const procssesName = await row.locator("td").nth(0).innerText();
        console.log(procssesName);
        if(procssesName==="Chrome"){
             cpuLoad = await row.locator('td:has-text("%")').innerText();
            console.log(cpuLoad)
            break;
        }

    }
    const compar :Locator=await page.locator("[id='chrome-cpu']");
    const comparText = await compar.innerText(); 
    console.log(comparText);
    if(comparText.includes(cpuLoad)){
        console.log("CPU load of chrome is equal");
    }
    else{
        console.log("Cpu load is not equal ");
    }

})