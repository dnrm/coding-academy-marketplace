import { withIronSessionApiRoute } from "iron-session/next";
import { prisma } from "../../lib/database";

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    if (!req.body.id) {
      return res.status(400).send({
        error: "id-not-provided",
      });
    }

    const user = await prisma.user.findUnique({ where: { id: req.body.id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
    };

    await req.session.save();
    res.send({ ok: true });
  },
  {
    cookieName: "coding_academy_session",
    password: process.env.COOKIE_SECRET,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
