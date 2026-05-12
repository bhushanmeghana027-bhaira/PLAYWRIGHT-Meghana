import {test,expect} from '@playwright/test'
/*
run sanity
npx playwright test tests/Session16/grouping.spec.ts --headed --debug --grep "@sanity"
runn both
npx playwright test tests/Session16/grouping.spec.ts --headed --debug --grep "(?=.*@sanity)(?.=*@regression)"
(?=.*@sanity)(?.=*@regression)

run sanity or regression
npx playwright test tests/Session16/grouping.spec.ts --headed --debug --grep "@sanity|@regression"

run all other test except sanity 
npx playwright test tests/Session16/grouping.spec.ts --headed --debug --grep-invert "@sanity"

run all sanity but not regression
npx playwright test tests/Session16/grouping.spec.ts --headed --debug --grep "@sanity" --grep-invert "@regression"
*/
test('Check the title of the page',{tag:'@sanity'},async({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})

test('check navigation to store page',{tag:'@regression'},async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories");
})

test('check browse phone ',{tag:['@regression','@sanity']},async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("div[class='S6B33 MPjQcb g7hYMe yoZH2c'] div[class='DhljYd'] div div[class='D4ljxd'] div[class='qny8z TLUDxb'] div a[class='IvQv9b rkH8Ae m2RiMc HBHdQb']").click();
    await expect(page).toHaveTitle("Pixel, the Only Smartphones Engineered by Google");
})