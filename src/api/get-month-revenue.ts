import { api } from "@/lib/axios";

export type GetMonthRevenueOrdersAmountResponse = {
  receipt: number;
  diffFromLastMonth: number;
};

export async function getMonthRevenueOrdersAmount() {
  const res = await api.get<GetMonthRevenueOrdersAmountResponse>(
    "/metrics/month-receipt"
  );

  return res.data;
}
