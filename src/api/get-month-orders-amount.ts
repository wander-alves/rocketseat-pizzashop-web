import { api } from '@/lib/axios';

interface GetMonthOrdersAmountResponse {
  amount: number;
  lastMonthAmountVariation: number;
}

async function getMonthOrdersAmount(): Promise<GetMonthOrdersAmountResponse> {
  const response = await api.get('/metrics/month-orders-amount');

  return response.data;
}

export { getMonthOrdersAmount }