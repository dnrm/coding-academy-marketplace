import { prisma } from "../../lib/database";

export default async function handler(req, res) {
  const users = await prisma.product.findMany();
  res.status(200).json(users);
}
