import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { useUserContext } from "../context/UserContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useUserContext();

  const logOut = async () => {
    const logOutRequest = await fetch("/api/logout");
    window.location.reload();
  };

  return (
    <div className="navigation">
      <div className="w-full bg-neutral-100 grid grid-cols-2 md:grid-cols-3 py-2 md:px-2 border-b-2 border-neutral-200">
        <Link href="/">
          <a className="logo flex justify-start items-center">
            <div className="relative h-14 md:h-16 w-40">
              <Image
                src="/logo.png"
                alt="Coding Academy Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="marketplace">
              <span className="text-3xl hidden md:block font-primary font-bold text-neutral-800 tracking-tighter">
                Marketplace
              </span>
            </div>
          </a>
        </Link>
        <div className="links justify-center items-center gap-4 hidden md:flex">
          <motion.div
            whileHover={{
              scale: 1.1,
              borderBottom: "2px solid rgba(0, 0, 0, 0.75)",
            }}
          >
            <Link href="/">
              <a className="text-neutral-800 text-base font-sans font-medium">
                Inicio
              </a>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              borderBottom: "2px solid rgba(0, 0, 0, 0.75)",
            }}
          >
            <Link href="/catalogo">
              <a className="text-neutral-800 text-base font-sans font-medium">
                Catálogo
              </a>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              borderBottom: "2px solid rgba(0, 0, 0, 0.75)",
            }}
          >
            <Link href="/mi-perfil">
              <a className="text-neutral-800 text-base font-sans font-medium">
                Mi Perfil
              </a>
            </Link>
          </motion.div>
        </div>
        {session ? (
          <div className="menu justify-end items-center gap-4 text-neutral-800 hidden md:flex">
            <div className="balance font-sans font-medium text-teal-500 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p>
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  notation: "compact",
                  currency: "USD",
                })
                  .format(session.balance)
                  .replace("$", "")}
              </p>
            </div>
            <div className={`sign-out cursor-pointer`} onClick={logOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="login justify-end items-center gap-2 px-2 hidden md:flex">
            <svg
              onClick={() => {
                toast("Solicite un link a su profesor para iniciar sesión.", {
                  duration: 4000,
                  icon: "👋",
                });
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        <div
          className="hamburger flex justify-end items-center md:hidden pr-4 cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {!isOpen ? (
            <button>
              <motion.svg
                whileHover={{ scale: 1.1 }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            </button>
          ) : (
            <button>
              <motion.svg
                whileHover={{ scale: 1.1 }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="menu-mobile md:hidden w-full border-b-2 col-span-2 p-4">
          {session?.balance ? (
            <div className="balance font-primary font-bold text-teal-500 flex justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p>
                Mis puntos:{" "}
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  notation: "compact",
                  currency: "USD",
                })
                  .format(session.balance)
                  .replace("$", "")}
              </p>
            </div>
          ) : null}
          <h1 className="text-5xl font-primary font-bold text-neutral-700 pb-2">
            Marketplace
          </h1>
          <div className="links">
            <motion.div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link href="/">
                <a className="text-neutral-500 font-sans font-semibold text-base inline">
                  Inicio
                </a>
              </Link>
            </motion.div>
            <motion.div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link href="/catalogo">
                <a className="text-neutral-500 font-sans font-semibold text-base inline">
                  Catálogo
                </a>
              </Link>
            </motion.div>
            <motion.div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link href="/mi-perfil">
                <a className="text-neutral-500 font-sans font-semibold text-base inline">
                  Mi Perfil
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
