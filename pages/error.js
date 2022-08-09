import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";

const errorOptions = [
  {
    label: "user-not-found",
    description:
      "No se encontró a ningún usuario con el ID proporcionado. Solicite un nuevo link a su profesor.",
    icon: (
      <p className="font-mono text-4xl md:text-6xl font-bold tracking-tighter">
        404
      </p>
    ),
  },
  {
    label: "id-not-provided",
    description:
      "Asegurese de proporcionar un ID de sesión. Solicite un nuevo link a su profesor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const Error = () => {
  const router = useRouter();
  const [error, setError] = useState();

  console.log(router.query.error);

  useEffect(() => {
    if (!router.isReady) return;

    if (router.query.error) {
      const errorOption = errorOptions.find((option) => {
        return option.label == router.query.error;
      });
      setError(errorOption);
      console.log(errorOption);
    }
  }, [router.isReady, router.query.error]);

  return (
    <div className="h-96">
      <Navigation />
      <div className="error-message h-full w-full flex justify-center items-center flex-col px-4">
        <div className="bar pb-5 text-red-500">
          {error && error.icon ? (
            error.icon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
        <h1 className="font-primary font-bold tracking-tighter text-lg md:text-2xl">
          {error ? error.description : "Error desconocido"}
        </h1>
      </div>
    </div>
  );
};

export default Error;
