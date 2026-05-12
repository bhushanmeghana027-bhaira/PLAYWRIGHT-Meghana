import {test,expect,Locator} from '@playwright/test'


test ("Screen shot demo", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const timestamp= Date.now();
    // page screen shot
    await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'});
    // full page screenshot 
    await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png',fullPage:true});
    // specific image
    const logopage= await page.locator("img[alt='Tricentis Demo Web Shop']");
    logopage.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});

    const featuredpro= await page.locator(".product-grid.home-page-product-grid");
    featuredpro.screenshot({path:'screenshots/'+'featuredproduct'+timestamp+'.png'});
})