import {test,expect,Locator} from '@playwright/test'

test("dynamic locator 2 ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table:Locator = await page.locator("[id ='taskTable'] tbody ");
    const rows:Locator[]=await table.locator("tr").all();

    console.log("Number of rows in atable:",rows.length);
    await expect(rows).toHaveLength(4);
    let CpuLoad="";
    for(const row of rows){
        const procssesName = await row.locator("td").nth(0).innerText();
        console.log(procssesName);
        if(procssesName==="Chrome"){
            CpuLoad = await row.locator('td:has-text("%")').innerText();
            console.log(CpuLoad);
            break;
        }

    }
    const NumberCo : Locator = page.locator("[class='chrome-cpu'] ");
    console.log(await NumberCo.innerText());
})