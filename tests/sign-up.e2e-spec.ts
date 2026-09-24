import { test, expect } from '@playwright/test';

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop');
  await page.getByLabel('Seu nome').fill('John Doe');
  await page.getByLabel('Seu e-mail').fill('john.doe@example.com');
  await page.getByLabel('Seu celular').fill('99 8877-6655');
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click();

  const toast = page.getByText('Restaurante cadastrado com sucesso!');

  expect(toast).toBeVisible();
});

test('sign up failure', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByLabel('Nome do estabelecimento').fill('Resturante Inválido');
  await page.getByLabel('Seu nome').fill('John Doe');
  await page.getByLabel('Seu e-mail').fill('john.doe@example.com');
  await page.getByLabel('Seu celular').fill('99 8877-6655');
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click();

  const toast = page.getByText('Ocorreu um erro ao cadastrar o restaurant. Por favor, aguarde alguns segundos e tente novamente.');

  expect(toast).toBeVisible();
});

test('navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Fazer login' }).click();

  expect(page.url()).toContain('/sign-in');
});

