import { http, HttpResponse } from 'msw';

import type { DispatchOrderParams } from '../dispatch-order';

const dispatchOrderMock = http
  .patch<
    DispatchOrderParams, 
    never,
    never
  >('/orders/:orderId/dispatch', async ({ params })=> {
      const { orderId } = params;

      if(orderId === 'error-order-1') {
        return new HttpResponse(null, {status: 400 });
      }      
    return new HttpResponse(null, { status: 204 });
});

export { dispatchOrderMock }
