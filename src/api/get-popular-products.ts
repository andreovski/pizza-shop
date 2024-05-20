import { api } from "@/lib/axios";

export type GetPopularProductsResponse = {
  product: string;
  amount: number;
}[];

export async function getPopularProducts() {
  const res = await api.get<GetPopularProductsResponse>(
    "/metrics/popular-products"
  );

  return res.data;
}
