import { api } from "@/lib/axios";

type UpdateProfileBody = {
  name: string;
  description: string;
};

export async function updateProfile(data: UpdateProfileBody) {
  await api.put("/profile", {
    ...data,
  });
}
