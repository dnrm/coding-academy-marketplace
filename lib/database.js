import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export async function getUserProducts(id) {
  const userProducts = await prisma.purchases.findMany({
    where: {
      userId: id,
    },
    include: {
      Product: true,
    },
  });

  return userProducts;
}

export async function getUserFromSession(session) {
  const user = await prisma.user.findUnique({
    where: {
      id: session,
    },
  });

  return user;
}

export async function createPurchase(price, productId, userId) {
  const purchase = await prisma.purchases.create({
    data: {
      price,
      Product: {
        connect: {
          id: productId,
        },
      },
      User: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return purchase;
}
