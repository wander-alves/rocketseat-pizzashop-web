import { BanknoteX } from "lucide-react";
import { useQuery } from '@tanstack/react-query';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getMonthCanceledOrdersAmount } from "@/api/get-canceled-month-orders-amount";
import { MetricCardSkeleton } from "@/pages/app/dashboard/metric-card-skeleton";

function MonthCanceledOrdersCard() {
  const { data: canceledMonthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
        <BanknoteX className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {canceledMonthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {canceledMonthOrdersAmount.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {canceledMonthOrdersAmount.lastMonthAmountVariation <= 0
                ? (
                  <>
                    <span className="text-emerald-500 dark:text-emerald-400">{canceledMonthOrdersAmount.lastMonthAmountVariation}%</span>{" "}em relação ao mês passado
                  </>
                ) : (
                  <>
                    <span className="text-rose-500 dark:text-rose-400">{canceledMonthOrdersAmount.lastMonthAmountVariation}%</span>{" "}em relação ao mês passado
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

export { MonthCanceledOrdersCard }