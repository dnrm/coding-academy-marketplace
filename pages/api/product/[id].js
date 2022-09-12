import { prisma } from "../../../lib/database";

export default async function handler(req, res) {
  const { id } = req.query;
  const user = await prisma.product.findUnique({
    where: { id },
  });
  res.status(200).json(user);
}
