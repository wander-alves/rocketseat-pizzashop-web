import { http, HttpResponse } from 'msw';

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period';

const getDailyRevenueInPeriodMock = http.get<
    never,
    never,
    GetDailyRevenueInPeriodResponse
  >('/metrics/daily-revenue-in-period', ()=> {
    return HttpResponse.json({
      revenuePerDay: [
      { date: '01/01/2026', revenue: 2000 },
      { date: '02/01/2026', revenue: 1300 },
      { date: '03/01/2026', revenue: 4500 },
      { date: '04/01/2026', revenue: 4800 },
      { date: '05/01/2026', revenue: 3200 },
      { date: '06/01/2026', revenue: 4650 },
      { date: '07/01/2026', revenue: 5600 },
    ]
    });  
});

export { getDailyRevenueInPeriodMock }
