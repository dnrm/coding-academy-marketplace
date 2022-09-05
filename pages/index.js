import Head from "next/head";
import Hero from "../components/Hero";
import { PrismaClient } from "@prisma/client";
import Navigation from "../components/Navigation";
import ProductList from "../components/ProductList";
import { withIronSessionSsr } from "iron-session/next";

export default function Home({ user }) {
  console.log(user);

  return (
    <div className="">
      <Head>
        <title>Coding Academy Marketplace | Inicio</title>
      </Head>
      <Navigation session={user} />
      <Hero />
      <ProductList />
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const prisma = new PrismaClient();

    if (req.session.user) {
      const user = await prisma.user.findUnique({
        where: {
          id: req.session.user.id,
        },
      });

      return {
        props: {
          user: JSON.parse(JSON.stringify(user)),
        },
      };
    }

    return {
      redirect: {
        destination: "/error?error=not-logged-in",
      },
    };
  },
  {
    cookieName: "coding_academy_session",
    password: process.env.COOKIE_SECRET,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
