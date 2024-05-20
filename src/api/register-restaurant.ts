import { api } from "@/lib/axios";

export interface RegisterRestaurant {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant(data: RegisterRestaurant) {
  await api.post("/restaurants", { ...data });
}
