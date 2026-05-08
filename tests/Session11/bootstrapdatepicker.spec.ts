import {test,expect,Locator} from '@playwright/test'

test("boot strap date picker", async({page}) => {
    await page.goto("https://www.booking.com/");
    await page.getByTestId("searchbox-dates-container").click();

    let checkInYear:string ="2026";
    let checkInMonth:string = "June";
    let checkInDay :string = "05";
})