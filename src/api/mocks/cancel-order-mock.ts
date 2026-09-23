import { http, HttpResponse } from 'msw';

import type { CancelOrderParams } from '../cancel-order';

const cancelOrderMock = http
  .patch<
    CancelOrderParams, 
    never,
    never
  >('/orders/:orderId/cancel', async ({ params })=> {
      const { orderId } = params;

      if(orderId === 'error-order-1') {
        return new HttpResponse(null, {status: 400 });
      }      
    return new HttpResponse(null, { status: 204 });
});

export { cancelOrderMock }
