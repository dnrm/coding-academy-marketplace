import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getUserFromSession, createPurchase } from "../../lib/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { product, session } = req.body;
  const user = await getUserFromSession(session.id);
  const purchase = await createPurchase(product.price, product.id, user.id);

  return res
    .status(200)
    .send({ message: `${user.name} bought ${product.name}` });
}
