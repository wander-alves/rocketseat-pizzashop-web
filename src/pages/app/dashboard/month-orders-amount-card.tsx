import { Utensils } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";

function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrdersAmount.lastMonthAmountVariation <= 0 
                ? (
                  <>
                    <span className="text-rose-500 dark:text-rose-400">{monthOrdersAmount.lastMonthAmountVariation}%</span> em relação ao mês passado
                  </>
                ) : (
                  <>
                    <span className="text-emerald-500 dark:text-emerald-400">{monthOrdersAmount.lastMonthAmountVariation}%</span> em relação ao mês passado
                  </>
                )
              }
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export { MonthOrdersAmountCard }