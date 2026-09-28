import { test, expect } from '@playwright/test';

test('list orders successfully', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  const currentPageItems = page.getByText('Total de 60 item(s)', { exact: true });
  await expect(currentPageItems).toBeVisible();

  const availablePages = page.getByText('Página 1 de 6', { exact: true });
  await expect(availablePages).toBeVisible();

  const firstOrderId = page.getByRole('cell', { name: 'order-1', exact: true });
  const lastOrderId = page.getByRole('cell', { name: 'order-10', exact: true });
  
  await expect(firstOrderId).toBeVisible();
  await expect(lastOrderId).toBeVisible();
});

test('filter orders by id', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'Id do pedido' }).fill('order-10');
  await page.getByRole('button', { name: 'Fitrar resultados' }).click();

  const orderItem = page.getByRole('cell', { name: 'order-10', exact: true });
  await expect(orderItem).toBeVisible();
});

test('filter orders by customer name', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'Nome' }).fill('Customer 10');
  await page.getByRole('button', { name: 'Fitrar resultados' }).click();

  const orderItem = page.getByRole('cell', { name: 'Customer 10' });
  await expect(orderItem).toBeVisible();
});

test('filter orders by status', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Pendente' }).click();
  await page.getByRole('button', { name: 'Fitrar resultados' }).click();
  
  await expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10);
});

test('navigate through orders page', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Próxima página' }).click();

  await expect(
    page.getByRole('cell', { name: 'order-11', exact: true })
  ).toBeVisible();

  await expect(
    page.getByRole('cell', { name: 'order-20', exact: true })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Última página' }).click();

  await expect(
    page.getByRole('cell', { name: 'order-51', exact: true })
  ).toBeVisible();

  await expect(
    page.getByRole('cell', { name: 'order-60', exact: true })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Página anterior' }).click();

  await expect(
    page.getByRole('cell', { name: 'order-41', exact: true })
  ).toBeVisible();
  
  await expect(
    page.getByRole('cell', { name: 'order-50', exact: true })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Primeira página' }).click();

  await expect(
    page.getByRole('cell', { name: 'order-1', exact: true })
  ).toBeVisible();

  await expect(
    page.getByRole('cell', { name: 'order-10', exact: true })
  ).toBeVisible();  
});