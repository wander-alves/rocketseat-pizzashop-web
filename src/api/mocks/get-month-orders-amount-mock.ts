import { http, HttpResponse } from 'msw';

import type { GetMonthOrdersAmountResponse } from '../get-month-orders-amount';

const getMonthOrdersAmountMock = http.get<
    never,
    never,
    GetMonthOrdersAmountResponse
  >('/metrics/month-orders-amount', ()=> {
    return HttpResponse.json({
      amount: 40,
      lastMonthAmountVariation: -10,
    });  
});

export { getMonthOrdersAmountMock }
