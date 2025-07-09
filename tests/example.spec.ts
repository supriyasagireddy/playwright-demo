import { test, expect } from '@playwright/test';

test('open example.com and check title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/); // ✅ Should pass
});

test('check wrong title (should fail)', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Wrong Title'); // ❌ Should fail
});
