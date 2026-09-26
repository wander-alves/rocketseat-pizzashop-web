import { http, HttpResponse } from 'msw';

import type { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount';

const getMonthCanceledOrdersAmountMock = http.get<
    never,
    never,
    GetMonthCanceledOrdersAmountResponse
  >('/metrics/canceled-month-orders-amount', ()=> {
    return HttpResponse.json({
      amount: 57,
      lastMonthAmountVariation: -12,
    });  
});

export { getMonthCanceledOrdersAmountMock }
