/*
only - only particualr test wiill run use it only for 1 testcase
skip
fail
fixme - fails the test smilar to fail
slow
*/
import {test,expect,Page} from '@playwright/test'

test('test1',async({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
test('test2',async({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
/*skip
test.skip('test2',async({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
    */
   /*
    // skip with parametrs
    test('test2',async({page,browserName}) => {
    test.skip(browserName==='chromium','the test is skipped if browser is frirefox');
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
*/
/* fail the test
test.fail('test4',async({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
    */
/* fixme
test.fixme('test2',async({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})
    */

test('test6',async({page}) => {
    test.slow();//triples the dealy default is 30s, so now it is 90s
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})