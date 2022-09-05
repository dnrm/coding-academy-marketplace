import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  function logoutRoute(req, res, session) {
    req.session.destroy();
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
