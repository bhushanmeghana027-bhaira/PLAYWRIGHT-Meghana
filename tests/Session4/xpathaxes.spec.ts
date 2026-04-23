import {test,expect,Locator} from '@playwright/test'

test("Xpath axes",async({page}) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    

    // 1. select germany
    const germanyCell:Locator = page.locator("xpath=//td[text()='Germany']");
    await expect(germanyCell).toContainText("Germany");
    // 2. select parent
    const germanyRow:Locator = page.locator("xpath=//td[text()='Germany']/parent::tr");
    await expect(germanyRow).toBeVisible();
    // 3. select following sibling
    const secondRowcells:Locator =  page.locator("xpath=//table[@id='customers']//tr[2]/child::td");
    await expect(secondRowcells).toHaveCount(3);
    // 4.select ancestor
    const table:Locator = page.locator("xpath=//td[text()='Germany']/ancestor::table");
    await expect(table).toHaveAttribute("id","customers");
    // 5. select decendant
    const descendantalltds:Locator = page.locator("xpath = //table[@id='customers']/descendant::td");
    const descendanttdsCount:number = await descendantalltds.count();
    await expect(descendantalltds).toHaveCount(descendanttdsCount);
    // 6. select follwowing sibling
    const followingCell:Locator = page.locator("xpath=//td[text()='Germany']/following::td[1]");
    await expect(followingCell).toContainText("Centro comercial Moctezuma");
    // 7. select thr preceeding  
    const preceedingCell:Locator = page.locator("xpath=//td[text()='Germany']/preceding::td[1]");
    const precedcellcount:number = await preceedingCell.count();
    console.log("Number of preceding siblings: " + precedcellcount);
    await expect(preceedingCell).toHaveCount(precedcellcount);
    // 8.select the preceding sibling
    const preceedingsiblingCell:Locator = page.locator("xpath=//td[text()='Germany']/preceding-sibling::td");
    const precedsiblingcellcount:number = await preceedingsiblingCell.count();
    console.log("Number of preceding siblings: " + precedsiblingcellcount);
    await expect(preceedingsiblingCell).toHaveCount(precedsiblingcellcount);

    
})
