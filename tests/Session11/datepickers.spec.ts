import {test,expect,Locator,Page} from '@playwright/test'
async function selectDate(targetyear:string,targetmonth:string,targetdate:string,page:Page,isFuture:boolean){

     while(true){
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();
        const currentYear = await page.locator(".ui-datepicker-year").textContent();

        if(currentMonth==targetmonth && currentYear==targetyear){
            break;
        }
        if(isFuture){
        // future dates 
        await page.locator(".ui-datepicker-next").click();
        }
    
        else{
        //   past dates
    await page.locator(".ui-datepicker-prev").click();
        }
    }
    const allDate= await page.locator(".ui-datepicker-calendar tbody a").all();
    for(let date of allDate){
        const dateText = await date.innerText();
        if(dateText == targetdate){
            await date.click();
            break;
        }
    }

  



}
test("date pickers",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput : Locator = page.locator('#datepicker');
    await expect(dateInput).toBeVisible();
    // datePicker.fill("06/20/2025");


    await dateInput.click();
    // selecting target date 
    // const year ='2026';
    // const month = 'June';
    // const day ='15';

      const year ='2025';
    const month = 'June';
    const day ='15';

    

    await selectDate(year,month,day,page,false);
    const expectdDate = "06/15/2025";
    await expect(dateInput).toHaveValue(expectdDate);

    // while(true){
    //     const currentMonth = await page.locator(".ui-datepicker-month").textContent();
    //     const currentYear = await page.locator(".ui-datepicker-year").textContent();

    //     if(currentMonth==month && currentYear==year){
    //         break;
    //     }
    //     // future dates 
    //     // await page.locator(".ui-datepicker-next").click();

    //       // past dates
    // await page.locator(".ui-datepicker-prev").click();
    // }
    // const allDate= await page.locator(".ui-datepicker-calendar tbody a").all();
    // for(let date of allDate){
    //     const dateText = await date.innerText();
    //     if(dateText == day){
    //         await date.click();
    //         break;
    //     }
    // }

  





    await page.waitForTimeout(5000);
})