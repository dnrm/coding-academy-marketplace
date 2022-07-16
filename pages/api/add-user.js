import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const data = {
    name: "John",
    lastName: "Doe",
    balance: 10000,
    products: {},
    joinDate: new Date(),
    profilePicture: "https://avatars.dicebear.com/api/initials/u.svg",
  };

  const add = await prisma.user.create({
    data,
  });
  res.status(200).send(add);
}
