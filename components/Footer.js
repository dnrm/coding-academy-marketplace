import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-primary border-t-2 border-neutral-300 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-16">
        <h1 className="text-xl md:text-2xl font-bold">
          Coding Academy Marketplace
        </h1>
        <div className="links flex justify-between items-center gap-4">
          <Link href="/">
            <a className="text-neutral-500">Home</a>
          </Link>
          <Link href="/catalogo">
            <a className="text-neutral-500">Catálogo</a>
          </Link>
          <Link href="/mi-perfil">
            <a className="text-neutral-500">Mi Perfil</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
