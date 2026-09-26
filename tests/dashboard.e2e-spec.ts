import { test, expect } from '@playwright/test';

test('display day orders amount metric', async ({ page })=> {
  await page.goto('/', { waitUntil: 'networkidle' });

  const cardValue = page.getByText('30', { exact: true });
  const cardDescription = page.getByText('-15% em relação a ontem');

  expect(cardValue).toBeVisible();
  expect(cardDescription).toBeVisible();
  await page.waitForTimeout(2000)
});


test('display month orders amount metric', async ({ page })=> {
  await page.goto('/', { waitUntil: 'networkidle' });

  const cardValue = page.getByText('250', { exact: true });
  const cardDescription = page.getByText('-25% em relação ao mês passado');

  expect(cardValue).toBeVisible();
  expect(cardDescription).toBeVisible();
});

test('display month canceled orders amount metric', async ({ page })=> {
  await page.goto('/', { waitUntil: 'networkidle' });

  const cardValue = page.getByText('57', { exact: true });
  const cardDescription = page.getByText('-12% em relação ao mês passado');

  expect(cardValue).toBeVisible();
  expect(cardDescription).toBeVisible();
  await page.waitForTimeout(2000)
});

test('display month revenue metric', async ({ page })=> {
  await page.goto('/', { waitUntil: 'networkidle' });

  const cardValue = page.getByText('R$ 450,00');
  const cardDescription = page.getByText('8% em relação ao mês passado');

  expect(cardValue).toBeVisible();
  expect(cardDescription).toBeVisible();
});