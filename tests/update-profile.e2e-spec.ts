import { test, expect } from '@playwright/test';

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click();
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click();

  await page.getByRole('textbox', { name: 'Nome' }).fill('Rocket Pizza');
  await page.getByRole('textbox', { name: 'Descrição' }).fill('Example description.');
  await page.getByRole('button', { name: 'Salvar' }).click();

  const toast = page.getByText('Perfil atualizado com sucesso!');

  expect(toast).toBeVisible();

  await page.getByRole('button', { name: 'Close' }).click();

  const button = page.getByRole('button', { name: 'Rocket Pizza' });
  expect(button).toBeVisible();

  await page.waitForTimeout(2000)  
});

test('update profile failure', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click();
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click();

  await page.getByRole('textbox', { name: 'Nome' }).fill('Test Name');
  await page.getByRole('textbox', { name: 'Descrição' }).fill('Example description.');
  await page.getByRole('button', { name: 'Salvar' }).click();

  const toast = page.getByText('Falha ao atualizar o perfil. Tente novamente.');

  expect(toast).toBeVisible();

  await page.getByRole('button', { name: 'Close' }).click();

  const button = page.getByRole('button', { name: 'Pizza Shop' });
  expect(button).toBeVisible();
});

