import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";
import { BarLoader } from "react-spinners";

const SignIn = () => {
  const saveUserId = (userId) => {
    localStorage.setItem("coding-academy-user-id", router.query.userid);
    console.log("%cUser ID stored in localStorage", "color: #00ff00");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const checkIfUserExists = async (userId) => {
    !userId ? (window.location.href = "/error?error=id-not-provided") : null;

    const response = await fetch(`/api/user/${userId}`);

    if (response.status === 404) {
      window.location.href = "/error?error=user-not-found";
    }
    const data = await response.json();

    if (data.id) {
      saveUserId(userId);
      console.log("%cUser ID found", "color: #00ff00");
    } else {
      console.log("%cUser does not exist", "color: red; font-size: 20px;");
      setTimeout(() => {
        window.location.href = "/error?error=user-not-found";
      }, 1000);
    }
  };

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;

    checkIfUserExists(router.query.userid);
  }, [router.isReady, router.query.userid]);

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
