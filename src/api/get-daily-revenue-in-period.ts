import { api } from "@/lib/axios";

interface GetDailyRevenueInPeriodQuery {
  from?: Date;
  to?: Date;
}

type GetDailyRevenueInPeriodResponse = {
  date: string;
  revenue: number;
}[];

async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery): Promise<GetDailyRevenueInPeriodResponse> {
  const response = await api.get('/metrics/daily-revenue-in-period',{
    params: {
      from,
      to
    }
  });

  return response.data.revenuePerDay;
}

export { getDailyRevenueInPeriod };