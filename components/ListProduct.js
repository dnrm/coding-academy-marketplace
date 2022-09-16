import React from "react";
import Image from "next/image";
import Link from "next/link";

const ListProduct = ({ id, name, price, image }) => {
  return (
    <div className="flex px-4 pt-4 border-[1px] border-neutral-300 rounded-lg">
      <Link href={`/producto/${id}`}>
        <a className="w-full">
          <div className="h-full w-full">
            <div className="bg-neutral-100 flex justify-center items-center h-64 md:h-96 relative w-full rounded-lg">
              <Image
                layout="fill"
                className="w-full h-full"
                objectFit="cover"
                src={image}
                alt={name}
              />
            </div>
            <div className="info flex justify-between items-center pt-4 pb-4">
              <h1 className="text-xl md:text-3xl font-bold font-primary text-neutral-700">
                {name}
              </h1>
              <h2 className="font-secondary text-teal-500 text-base md:text-2xl font-bold">
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
