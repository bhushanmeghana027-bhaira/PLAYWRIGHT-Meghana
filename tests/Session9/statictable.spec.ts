import {test,expect,Locator} from '@playwright/test'

test("Static tables",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // // capture the table
    const table:Locator= page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    // // count number of rows
    // // returns all rows including header
    const rows:Locator=page.locator("table[name='BookTable'] tbody tr ");
    await expect(rows).toHaveCount(7);
    const rowsCount:number=await rows.count();
    console.log("number of rows in a table:",rowsCount);
    expect(rowsCount).toBe(7);

    // // count number of header /colums
    const columns:Locator= rows.locator("th");
    await expect(columns).toHaveCount(4);
    const columnsCount:number=await columns.count();
    console.log("number of rows in a table:",columnsCount);
    expect(columnsCount).toBe(4);

    // read the data from 2 row
    const secondRowCells:Locator= page.locator("table[name='BookTable'] tbody tr:nth-child(2) td");
    const secondRowCellsCount = await secondRowCells.count();
    for(let i=0;i<secondRowCellsCount;i++){
        console.log(await secondRowCells.nth(i).innerText());
    }
    await expect(secondRowCells).toHaveText(['Learn Selenium','Amit','Selenium','300']);
    

    
    // read all data
    const allRowData:Locator[]= await rows.all();
    console.log("bookname   author  subject   price");
    for(let row of allRowData){
        const cols:string[] = await row.locator('td').allInnerTexts();
        console.log(cols.join('\t'));
    }

    // print the bookname where author is Mukesh 
    // step1: collect all eleement 
    // const mukeshBooks:string[]=[];
    // let bookname;
    // const allrows:Locator = await page.locator("table[name='BookTable'] tbody tr");
    // const allrowscount = await allrows.count();
    // for(let i=1;i<allrowscount;i++){
    //     const authorName= await allrows.nth(i).locator("td:nth-child(2)").innerText();
    //     if(authorName==='Mukesh'){
    //             bookname= await allrows.nth(i).locator("td:nth-child(1)").innerText();
    //             console.log(bookname);
    //             mukeshBooks.push(bookname);
                
    //     }
        
    // }
    // await expect(mukeshBooks).toHaveLength(2);

    // calculate allprice and get total price
    let tp =0;
    const price :Locator= page.locator("table[name='BookTable'] tbody  tr td:nth-child(4)");
    // console.log("Price:",await price.innerText());
    const priceNum:number = await price.count();
    for(let i=0;i<priceNum;i++){
        // console.log("Price:",await price.nth(i).innerText());
        tp = tp + Number(await price.nth(i).innerText());
    }
    console.log(tp);


})