import { api } from '@/lib/axios';

interface GetMonthCanceledOrdersAmountResponse {
  amount: number;
  lastMonthAmountVariation: number;
}

async function getMonthCanceledOrdersAmount(): Promise<GetMonthCanceledOrdersAmountResponse> {
  const response = await api.get('/metrics/canceled-month-orders-amount');

  return response.data;
}

export { getMonthCanceledOrdersAmount }