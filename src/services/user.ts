import { getToken } from "@/libs/auth";
import prisma from "@/libs/prisma";

export const GetUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

export const GetCurrentUser = async () => {
  const token = getToken();

  const res = await fetch("http://localhost:3000/api/users/getuserbytoken", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return {};

  const userData = await res.json();
  return userData;
};
