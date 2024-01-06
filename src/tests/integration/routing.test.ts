import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('Test home page rendering', async ({ page }) => {
  await Promise.all([
    expect(page.getByText('useReducer')).toBeDefined(),
    expect(page.getByText('useRef')).toBeDefined(),
    expect(page.getByText('useMemo')).toBeDefined(),
    expect(page.getByText('useCallback')).toBeDefined(),
  ]);
});

test('Test routing', async ({ page }) => {
  const routes = [
    { text: 'useReducer', path: 'use-reducer' },
    { text: 'useRef', path: 'use-ref' },
    { text: 'useMemo', path: 'use-memo' },
    { text: 'useCallback', path: 'use-callback' },
  ];

  for (const route of routes) {
    await expect(page).toHaveURL('http://localhost:5173');
    await page.getByText(route.text).click();
    await expect(page).toHaveURL(`http://localhost:5173/${route.path}`);

    await page.getByText(/^Back/).click();
  }
});
