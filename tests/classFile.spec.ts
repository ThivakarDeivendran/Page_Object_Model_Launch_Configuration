import { test } from '@playwright/test';

test('Test playwright config', async ({ page }) => {
  await page.goto('/');
  const title = await page.title();
  console.log('Page title:    ', title);
});
