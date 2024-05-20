import { api } from "@/lib/axios";

export type GetMonthOrdersAmountResponse = {
  amount: number;
  diffFromLastMonth: number;
};

export async function getMonthOrdersAmount() {
  const res = await api.get<GetMonthOrdersAmountResponse>(
    "/metrics/month-orders-amount"
  );

  return res.data;
}
