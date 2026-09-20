import { api } from "@/lib/axios";

interface GetDailyRevenueInPeriodQuery {
  from?: Date;
  to?: Date;
}

interface GetDailyRevenueInPeriod { 
  date: string;
  revenue: number;
}

type GetDailyRevenueInPeriodResponse = {
  revenuePerDay: GetDailyRevenueInPeriod[];
};

async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery){
  const response = await api.get<GetDailyRevenueInPeriodResponse>('/metrics/daily-revenue-in-period',{
    params: {
      from,
      to
    }
  });

  return response.data.revenuePerDay;
}

export { getDailyRevenueInPeriod };
export type { GetDailyRevenueInPeriodQuery, GetDailyRevenueInPeriodResponse };
