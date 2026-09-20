import { api } from '@/lib/axios';

interface GetMonthOrdersRevenueResponse {
  revenue: number;
  lastMonthRevenueVariation: number;
}

async function getMonthOrdersRevenue(): Promise<GetMonthOrdersRevenueResponse> {
  const response = await api.get('/metrics/month-revenue');

  return response.data;
}

export { getMonthOrdersRevenue }
export type { GetMonthOrdersRevenueResponse }