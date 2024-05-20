import { api } from "@/lib/axios";

export interface GetManageRestauratsResponse {
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManageRestaurats() {
  const response = await api.get<GetManageRestauratsResponse>(
    "/managed-restaurant"
  );

  return response.data;
}
