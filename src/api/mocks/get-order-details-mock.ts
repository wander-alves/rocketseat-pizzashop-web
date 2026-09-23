import { http, HttpResponse } from 'msw';

import type { GetOrderDetailsParams, GetOrderDetailsResponse } from '../get-order-details';

const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params })=> {
  const { orderId } = params;
  
    return HttpResponse.json({
    id: orderId,
    customer: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '99 8877-6655',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: Math.random() * 100 * 10,
    orderProducts: [
      {
        id: 'order-product-1',
        priceInCents: Math.random() * 100 * 2,
        quantity: 1,
        product: {
          name: 'Pizza Calabresa'
        },
      },
      {
        id: 'order-product-2',
        priceInCents: Math.random() * 100 * 2,
        quantity: 1,
        product: {
          name: 'Pizza Marguerita'
        },
      },
    ]
  })

});

export { getOrderDetailsMock };