import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page.getByLabel('Seu e-mail').fill('john.doe@example.com');
  await page.getByRole('button', { name: 'Acessar painel' }).click();

  const toast = page.getByText('Enviamos um link para o e-mail cadastrado.');

  expect(toast).toBeVisible();
});

test('sign in failure with invalid credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page.getByLabel('Seu e-mail').fill('unknown@example.com');
  await page.getByRole('button', { name: 'Acessar painel' }).click();

  const toast = page.getByText('Credenciais inválidas.');

  expect(toast).toBeVisible();
});

test('navigate to restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click();

  expect(page.url()).toContain('/sign-up');
});

