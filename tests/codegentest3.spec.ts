import { test, expect } from '@playwright/test';
// npx playwright codegen --output tests/codegentest3.spec.ts --browser firefox  
// run this cmd 
test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
});