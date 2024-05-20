import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ["metrics", "day-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500  dark:text-emerald-400">
                    +{dayOrdersAmount.diffFromYesterday}%
                  </span>{" "}
                  em relação ao dia anterior
                </>
              ) : (
                <>
                  <span className="text-rose-500  dark:text-rose-400">
                    {dayOrdersAmount.diffFromYesterday}%
                  </span>{" "}
                  em relação ao dia anterior
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
