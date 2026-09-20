import { setupWorker } from 'msw/browser';

import { env } from '@/lib/env';
import { signInMock } from './sign-in-mock';
import { registerRestaurantMock } from './register-restaurant-mock';
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock';
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock';
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock';
import { getMonthOrdersRevenueMock } from './get-month-orders-revenue-mock';
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock';
import { getPopularProductsMock } from './get-popular-products-mock';

const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthOrdersRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock
);

async function enableMSW() {
  if(env.MODE !== 'test') {
    return;
  }

  await worker.start();
}

export { enableMSW, worker };