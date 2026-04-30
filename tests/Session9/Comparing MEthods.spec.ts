import {test,expect,Locator} from '@playwright/test'

test("Comparing methods",async({page}) => {
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const products:Locator = page.locator('div.caption h4 a');
    const count = await products.count();

   
    // 1] inner text vs textContent()
    
    // console.log(await products.nth(1).innerText());
    // console.log(await products.nth(1).textContent());
   //   for(let i=0;i<count;i++){
        // const productName:string = await products.nth(i).innerText();
      //   const productName:string|null = await products.nth(i).textContent();
      //   console.log(productName?.trim());
      //   productName.map()
   //   }

   //   2]allInnerText() v/s allTextContent()
//   const productName:string[]= await products.allInnerTexts();
//   console.log("Product name captured by all inner text:",productName);
// Product name captured by all inner text: [ 'MacBook', 'iPhone', 'Apple Cinema 30"', 'Canon EOS 5D' ]
 
// 3] all
const productLocator:Locator[]=await products.all();
console.log(productLocator)
console.log(await productLocator[1].innerText());

for(let prodloc of productLocator)
   console.log(await prodloc.innerText());


})