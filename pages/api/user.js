import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  function userRoute(req, res) {
    res.send({ user: req.session.user });
  },
  {
    cookieName: "coding_academy_session",
    password: process.env.COOKIE_SECRET,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
