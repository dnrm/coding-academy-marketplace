import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[50vh]">
      <div className="content flex justify-center items-center h-[50vh] w-full flex-col z-10 absolute gap-8">
        <h1 className="text-6xl md:text-8xl text-white font-bold font-primary text-center leading-squish tracking-tighter">
          Coding Academy Marketplace
        </h1>
        <button className="bg-white opacity-90 px-24 text-lg py-2 rounded-lg font-sans tracking-tight text-neutral-700 font-semibold">
          Ver más →
        </button>
      </div>
      <div className="image h-full w-full relative bg-black">
        <Image
          src="/lake.jpeg"
          priority={true}
          alt="Hero image"
          layout="fill"
          className="absolute opacity-70"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;
