import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";
import Navigation from "../components/Navigation";

const SignIn = ({ id }) => {
  const router = useRouter();

  useEffect(() => {
    const login = async () => {
      const req = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();

      if (req.status === 404) {
        router.push("/error?error=user-not-found");
      } else if (req.status === 400) {
        router.push("/error?error=id-not-provided");
      } else if (req.status === 200) {
        router.push("/");
      }

      console.log(res);
    };
    login();
  }, [id, router]);

  return (
    <div className="h-96">
      <Navigation />
      <div className="error-message h-full w-full flex justify-center items-center flex-col">
        <div className="bar pb-5">
          <BarLoader width={200} />
        </div>
        <h1 className="font-primary font-bold tracking-tighter text-2xl">
          Iniciando sesión :)
        </h1>
      </div>
    </div>
  );
};

export default SignIn;

export async function getServerSideProps({ query }) {
  if (query.id) {
    return {
      props: {
        id: query.id,
      },
    };
  }

  return {
    redirect: {
      destination: "/error?error=id-not-provided",
      permanent: false,
    },
  };
}
