import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  function userRoute(req, res) {
    if (req.session.user) {
      res.send({ user: req.session.user });
    } else {
      res.status(401).send({ error: "Not logged in" });
    }
  },
  {
    cookieName: "coding_academy_session",
    password: process.env.COOKIE_SECRET,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
