import { test, expect } from '@playwright/test';
// in terminal write npx playwright codegen
test('codegen', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('meghana');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@1234');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
  await page.getByText('PRODUCT STORE Home (current)').click();
});