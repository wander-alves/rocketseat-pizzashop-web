import { http, HttpResponse } from 'msw';

import type { GetDayOrdersAmountResponse } from '../get-day-orders-amount';

const getDayOrdersAmountMock = http.get<
    never,
    never,
    GetDayOrdersAmountResponse
  >('/metrics/day-orders-amount', ()=> {
    return HttpResponse.json({
      amount: 30,
      yesterdayAmountVariation: -15,
    });  
});

export { getDayOrdersAmountMock }
