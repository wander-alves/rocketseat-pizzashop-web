import { http, HttpResponse } from 'msw';

import type { DeliverOrderParams } from '../deliver-order';

const deliverOrderMock = http
  .patch<
    DeliverOrderParams, 
    never,
    never
  >('/orders/:orderId/deliver', async ({ params })=> {
      const { orderId } = params;

      if(orderId === 'error-order-1') {
        return new HttpResponse(null, {status: 400 });
      }      
    return new HttpResponse(null, { status: 204 });
});

export { deliverOrderMock }
