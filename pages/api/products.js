import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const users = await prisma.product.findMany();
  res.status(200).json(users);
}
