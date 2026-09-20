import { http, HttpResponse } from 'msw';

import type { GetMonthOrdersRevenueResponse } from '../get-month-orders-revenue';

const getMonthOrdersRevenueMock = http.get<
    never,
    never,
    GetMonthOrdersRevenueResponse
  >('/metrics/month-revenue', ()=> {
    return HttpResponse.json({
      revenue: 45000,
      lastMonthRevenueVariation: 8,
    });  
});

export { getMonthOrdersRevenueMock }
