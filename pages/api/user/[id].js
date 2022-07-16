import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  const user = await prisma.user.findUnique({
    where: { id },
  });
  res.status(200).json(user);
}
