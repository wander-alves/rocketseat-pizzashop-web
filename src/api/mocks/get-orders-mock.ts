import { http, HttpResponse } from 'msw';

import type { GetOrdersResponse } from '../get-orders';

type Orders = GetOrdersResponse['orders'];
type OrderStatus = Orders[number]['status'];

const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'delivering',
  'delivered',
  'canceled',
];

const ordersMock: Orders  = Array.from({ length: 60 }).map((_, i)=> {
  return { 
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i}`,
    total: Math.random() * i * 100,
    status: statuses[i % 5],
    createdAt: new Date().toISOString(),
  }
});

const getOrdersMock = http.get<
  never,
  never,
  GetOrdersResponse
>('/orders', ({ request })=> {
  const { searchParams } = new URL(request.url);

  const pageIndex = searchParams.get('pageIndex') 
    ? Number(searchParams.get('pageIndex'))
    : 0;

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status');

  let filteredOrders: Orders = ordersMock;

  if(orderId) {
    filteredOrders = ordersMock.filter((order)=> order.orderId.includes(orderId));
  }

  if(customerName) {
    filteredOrders = ordersMock.filter((order)=> order.customerName.includes(customerName));
  }

  if(status) {
    filteredOrders = ordersMock.filter((order)=> order.status.includes(status));
  }

  const paginatedOrders = filteredOrders.slice(
    pageIndex * 10,
    (pageIndex + 1) * 10,
  )

  return HttpResponse.json({
    orders: paginatedOrders,
    meta: {
      pageIndex,
      perPage: 10,
      totalCount: filteredOrders.length,
    }
  })
});

export { getOrdersMock, ordersMock };