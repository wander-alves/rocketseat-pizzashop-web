
import { MonthRevenueCard } from "@/pages/app/dashboard/month-revenue-card"
import { MonthOrdersAmountCard } from "@/pages/app/dashboard/month-orders-amount-card"
import { DayOrdersAmountCard } from "@/pages/app/dashboard/day-orders-amount-card"
import { MonthCanceledOrdersCard } from "@/pages/app/dashboard/month-canceled-orders-card"
import { RevenueChart } from "@/pages/app/dashboard/revenue-chart"
import { PopularProductsChart } from "@/pages/app/dashboard/popular-products-chart"

function Dashboard() {
  return (
    <>
      <title>Dashboard | pizza.shop</title>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}

export { Dashboard }