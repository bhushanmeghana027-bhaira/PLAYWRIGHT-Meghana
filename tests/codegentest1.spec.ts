import { test, expect } from '@playwright/test';
// npx playwright codegen --output tests/codegentest1.spec.ts
// write this in terminal then do all actons 
test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.locator('div:nth-child(7) > .card > a').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
});