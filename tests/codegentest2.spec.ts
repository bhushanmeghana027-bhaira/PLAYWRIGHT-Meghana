import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Galaxy S24'],
});

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.getByLabel('Log in').getByText('Close').click();
  await page.getByRole('link', { name: 'About us' }).click();
  await page.locator('.vjs-poster').click();
  await page.locator('#videoModal').getByText('Close', { exact: true }).click();
});