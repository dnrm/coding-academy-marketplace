import { prisma } from "../../../lib/database";

export default async function handler(req, res) {
  const { id } = req.query;
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!user) {
    res.status(404).json({ error: "User not found" });
  } else {
    res.status(200).json(user);
  }
}
