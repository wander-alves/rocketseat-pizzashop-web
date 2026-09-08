import { Skeleton } from "@/components/ui/skeleton";

function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="h-7 w-32 mt-1"/>
      <Skeleton className="h-3 w-56"/>
    </>
  )
}

export { MetricCardSkeleton }