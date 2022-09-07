import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navigation = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const logOut = async () => {
    const logOutRequest = await fetch("/api/logout");
    console.log(logOutRequest);
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
              <a className="text-neutral-800 text-lg font-secondary font-bold">
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
            <Link href="/destacados">
              <a className="text-neutral-800 text-lg font-secondary font-bold">
                Destacados
              </a>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              borderBottom: "2px solid rgba(0, 0, 0, 0.75)",
            }}
          >
            <Link href="/mi-avatar">
              <a className="text-neutral-800 text-lg font-secondary font-bold">
                Mi Avatar
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
              <a className="text-neutral-800 text-lg font-secondary font-bold">
                Mi Perfil
              </a>
            </Link>
          </motion.div>
        </div>
        {session ? (
          <div className="menu justify-end items-center gap-2 text-neutral-800 hidden md:flex">
            <div className="balance font-primary font-bold text-teal-500">
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
            <div className="settings cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="profile cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
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
        ) : null}
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
          <div className="balance font-primary font-bold text-teal-500">
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
                <a className="text-neutral-500 font-primary font-bold text-xl inline">
                  Inicio
                </a>
              </Link>
            </motion.div>
            <motion.div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link href="/destacados">
                <a className="text-neutral-500 font-primary font-bold text-xl inline">
                  Destacados
                </a>
              </Link>
            </motion.div>
            <motion.div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link href="/mi-avatar">
                <a className="text-neutral-500 font-primary font-bold text-xl inline">
                  Mi Avatar
                </a>
              </Link>
            </motion.div>
            <motion.div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link href="/mi-perfil">
                <a className="text-neutral-500 font-primary font-bold text-xl inline">
                  Mi Perfil
                </a>
              </Link>
            </motion.div>
            <motion.div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link href="/configuracion">
                <a className="text-neutral-500 font-primary font-bold text-xl inline">
                  Configuración
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
