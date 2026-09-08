import { Utensils } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { MetricCardSkeleton } from "@/pages/app/dashboard/metric-card-skeleton";

function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  });
  
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {dayOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.yesterdayAmountVariation <= 0 
                ? (
                  <>
                    <span className="text-rose-500 dark:text-rose-400">{dayOrdersAmount.yesterdayAmountVariation}%</span> em relação a ontem
                  </>
                ) : (
                  <>
                    <span className="text-emerald-500 dark:text-emerald-400">{dayOrdersAmount.yesterdayAmountVariation}%</span> em relação a ontem
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

export { DayOrdersAmountCard }