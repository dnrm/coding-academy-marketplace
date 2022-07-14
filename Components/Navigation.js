import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="w-full bg-neutral-100 grid grid-cols-3 p-2">
      <div className="logo flex justify-start items-center">
        <div className="relative h-16 w-40">
          <Image
            src="/logo.png"
            alt="Coding Academy Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="marketplace">
          <h1 className="text-3xl font-primary font-bold text-neutral-800 tracking-tighter">
            Marketplace
          </h1>
        </div>
      </div>
      <div className="links justify-center items-center gap-4 hidden md:flex">
        <Link href="/">
          <a className="text-neutral-800 font-primary font-bold">Inicio</a>
        </Link>
        <Link href="/destacados">
          <a className="text-neutral-800 font-primary font-bold">Destacados</a>
        </Link>
        <Link href="/mi-avatar">
          <a className="text-neutral-800 font-primary font-bold">Mi Avatar</a>
        </Link>
        <Link href="/mi-perfil">
          <a className="text-neutral-800 font-primary font-bold">Mi Perfil</a>
        </Link>
      </div>
      <div className="menu justify-end items-center gap-2 text-neutral-800 hidden md:flex">
        <div className="balance font-primary font-bold text-yellow-500">
          <p>Mis puntos: {Math.floor(Math.random() * 10000)}</p>
        </div>
        <div className="settings">
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
        <div className="profile">
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
      </div>
    </div>
  );
};

export default Navigation;
