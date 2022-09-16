import React from "react";
import Navigation from "./Navigation";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useUserContext } from "../context/UserContext";

const ProductLayout = ({ children, product }) => {
  const { session } = useUserContext();

  const purchaseItem = async () => {
    if (!session) {
      toast.error("Debes iniciar sesión para comprar este producto");
      return;
    }

    const response = await fetch("/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product,
        session,
      }),
    });

    if (response.ok) {
      toast.success("¡Producto comprado con éxito!");
    }

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="bg-neutral-100 h-screen">
      <Navigation session={session} />
      <div className="content p-5 md:mt-16 max-w-6xl mx-auto flex justify-start items-start flex-wrap grow gap-4 bg-white rounded-lg">
        <div className="product-image relative h-96 w-full md:w-96 bg-gray-100 rounded-xl">
          <Image
            src={product.image}
            layout="fill"
            className="h-full w-full"
            objectFit="cover"
            alt={product.title}
          ></Image>
        </div>
        <div className="heading flex flex-col justify-between items-start h-96 flex-grow">
          <div className="product-information flex-col justify-between items-center h-full w-full">
            <span className="text-neutral-500">{product.Category.name}</span>
            <div className="flex justify-between items-center w-full gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-primary tracking-tighter">
                {product.name}
              </h1>
              <p className="text-xl md:text-4xl text-teal-400 font-bold font-secondary">
                ${product.price}
              </p>
            </div>
            <div className="description pt-2">
              <p className="text-neutral-400 font-tertiary text-sm">
                {new Date(product.createdAt).toLocaleDateString()}
              </p>
              <p className="text-base md:text-xl text-neutral-600 font-secondary">
                {product.description}
              </p>
            </div>
          </div>
          <div className="purchase-button w-full">
            <button
              className={`bg-teal-400 w-full text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-500 disabled:bg-neutral-300 ${
                session ? "" : "cursor-not-allowed"
              }`}
              disabled={!session}
              onClick={purchaseItem}
            >
              {session ? "Comprar" : "Inicia sesión para comprar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
