import { api } from '@/lib/axios';

interface GetDayOrdersAmountResponse {
  amount: number;
  yesterdayAmountVariation: number;
}

async function getDayOrdersAmount(): Promise<GetDayOrdersAmountResponse> {
  const response = await api.get('/metrics/day-orders-amount');

  return response.data;
}

export { getDayOrdersAmount }