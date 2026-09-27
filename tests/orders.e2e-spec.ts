import { test, expect } from '@playwright/test';

test('list orders successfully', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  const currentPageItems = page.getByText('Total de 60 item(s)', { exact: true });
  expect(currentPageItems).toBeVisible();

  const availablePages = page.getByText('Página 1 de 6', { exact: true });
  expect(availablePages).toBeVisible();

  const firstOrderId = page.getByRole('cell', { name: 'order-1', exact: true });
  const lastOrderId = page.getByRole('cell', { name: 'order-10', exact: true });
  
  expect(firstOrderId).toBeVisible();
  expect(lastOrderId).toBeVisible();
});

test('filter orders by id', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'Id do pedido' }).fill('order-10');
  await page.getByRole('button', { name: 'Fitrar resultados' }).click();

  const orderItem = page.getByRole('cell', { name: 'order-10', exact: true });
  expect(orderItem).toBeVisible();
});

test('filter orders by customer name', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'Nome' }).fill('Customer 10');
  await page.getByRole('button', { name: 'Fitrar resultados' }).click();

  const orderItem = page.getByRole('cell', { name: 'Customer 10' });
  expect(orderItem).toBeVisible();
});

test('filter orders by status', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Pendente' }).click();
  await page.getByRole('button', { name: 'Fitrar resultados' }).click();
  await page.waitForTimeout(250);

  const orderItems = await page.getByRole('cell', { name: 'Pendente' }).all();
  expect(orderItems).toHaveLength(10);
});

test('navigate through orders page', async ({ page })=> {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Próxima página' }).click();
  await page.waitForTimeout(250);

  expect(
    page.getByRole('cell', { name: 'order-11', exact: true })
  ).toBeVisible();
  expect(
    page.getByRole('cell', { name: 'order-20', exact: true })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Última página' }).click();
  await page.waitForTimeout(250);

  expect(
    page.getByRole('cell', { name: 'order-51', exact: true })
  ).toBeVisible();
  expect(
    page.getByRole('cell', { name: 'order-60', exact: true })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Página anterior' }).click();
  await page.waitForTimeout(250);

  expect(
    page.getByRole('cell', { name: 'order-41', exact: true })
  ).toBeVisible();
  expect(
    page.getByRole('cell', { name: 'order-50', exact: true })
  ).toBeVisible();

  await page.getByRole('button', { name: 'Primeira página' }).click();
  await page.waitForTimeout(250);
  
  expect(
    page.getByRole('cell', { name: 'order-1', exact: true })
  ).toBeVisible();
  expect(
    page.getByRole('cell', { name: 'order-10', exact: true })
  ).toBeVisible();  
});