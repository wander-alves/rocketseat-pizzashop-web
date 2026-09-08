import { DollarSign } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getMonthOrdersRevenue } from "@/api/get-month-orders-revenue";
import { MetricCardSkeleton } from "@/pages/app/dashboard/metric-card-skeleton";

function MonthRevenueCard() {
  const { data: monthOrdersRevenue } = useQuery({
    queryKey: ['metrics', 'month-orders-revenue'],
    queryFn: getMonthOrdersRevenue,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Receita Total (mês)</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthOrdersRevenue ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthOrdersRevenue.revenue/100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrdersRevenue.lastMonthRevenueVariation <= 0
                ? (
                  <>
                    <span className="text-rose-500 dark:text-rose-400">{monthOrdersRevenue.lastMonthRevenueVariation}%</span> em relação ao mês passado
                  </>
                ) : (
                  <>
                    <span className="text-emerald-500 dark:text-emerald-400">{monthOrdersRevenue.lastMonthRevenueVariation}%</span> em relação ao mês passado
                  </>
                )
              }
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}

export { MonthRevenueCard }