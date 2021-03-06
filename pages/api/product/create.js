import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { name, image, price, description } = req.body;
  const user = await prisma.product.create({
    data: {
      name,
      image,
      price: parseInt(price),
      description,
    },
  });
  res.status(200).json(user);
}
