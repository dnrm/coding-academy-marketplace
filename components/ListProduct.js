import React from "react";
import Image from "next/image";
import Link from "next/link";

const ListProduct = ({ id, name, price, image }) => {
  return (
    <div className="flex">
      <Link href={`/producto/${id}`}>
        <a>
          <div className="h-full w-64 md:w-96">
            <div className="bg-neutral-200 flex justify-center items-center h-64 md:h-96 relative w-full">
              <Image
                layout="fill"
                className="w-full h-full"
                objectFit="cover"
                src={image}
                alt={name}
              />
            </div>
            <div className="info flex justify-between items-center">
              <h1 className="text-xl md:text-4xl font-bold font-secondary">
                {name}
              </h1>
              <h2 className="font-secondary text-yellow-400 text-base md:text-2xl font-bold">
                ${price}
              </h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ListProduct;
