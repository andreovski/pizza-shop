import { api } from "@/lib/axios";

export type GetOrderDetailsParams = {
  orderId: string;
};

export type GetOrderDetailsResponse = {
  id: string;
  createdAt: string;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  totalInCents: number;
  customer: {
    phone: string | null;
    email: string;
    name: string;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: {
      name: string;
    };
  }[];
};

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const res = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`);

  return res.data;
}
