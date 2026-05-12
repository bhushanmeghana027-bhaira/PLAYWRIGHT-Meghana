/*
open application - before all

login - before each
find products
logout - after each 

login - before each
add product to cart 
logout-after each

close app - after all

*/

import {test,expect,Page} from '@playwright/test'
let page : Page;
test.beforeAll('open application',async({browser})=>{
     page = await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");
})

test.afterAll('close application',async({browser})=>{
    await page.close();
})

test.beforeEach('Login',async()=>{
   await  page.locator("#login2").click();
   await page.locator("#loginusername").fill("pavanol");
   await page.locator("#loginpassword").fill("test@123");
   await page.locator("button[onclick ='logIn()']").click();
   await page.waitForTimeout(2000);
})

test.afterEach('logout app',async()=>{
    await page.locator("#logout2").click();
})

test('find no of products',async() =>{
    const allproduct= await page.locator("#tbodyid .col-lg-4.col-md-6.mb-4");
    const countofallproduvt = allproduct.count();
    console.log("total no of products available:",countofallproduvt);
    await expect(allproduct).toHaveCount(9);
})

test('add produvt to cart',async() =>{
    await page.getByRole('link',{name:'Samsung galaxy s6'}).click();
    
    page.on('dialog',async(dialog)=>{
         console.log("Alert text:", dialog.message());
         expect(dialog.message()).toContain('Product added');
          await dialog.accept();
    })
    await page.getByRole('link',{name:'Add to cart'}).click();
})


