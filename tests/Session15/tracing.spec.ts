import {test,expect,Locator} from '@playwright/test'
// after running the test do nplx playwright show-report there u can see vieew trace click that 


test ("tracing  demo", async({page,context})=>{
    // make trace ass off in config file
    // how to open result run this ,  npx playwright show-trace myfilename.zip                                
   await context.tracing.start({screenshots:true,snapshots:true});
    await page.goto("https://demoblaze.com/index.html");
    await page.getByRole('link',{name:"Log in"}).click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.getByRole('button',{name:"Log in"}).click();
    const logoutLocator = await page.locator("#logout2");
    await expect(logoutLocator).toBeVisible();
    context.tracing.stop({path:'myfilename.zip'});

})

// // three are 3 methods 
// 1] via cmd - we didnt concentrate npx playwright test mystest.spec.ts teace --on
// 2] ours u will got to config make change and run 
// 3] via context

//  how to view results
// 1] from geml file - click viewTrace.zip
// 2]through cmd = npx playwright show-teacr myfilename.zip
// 3] utility [we dont know this]