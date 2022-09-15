import React from "react";
import ListProduct from "./ListProduct";
import { useProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { data, error } = useProductContext();

  return (
    <div className="list p-4 md:p-8 flex flex-col gap-4">
      <h1 className="text-xl md:text-4xl lg:text-4xl font-bold font-primary tracking-tighter pb-2">
        Más Vendidos ⭐️
      </h1>
      <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-4 md:gap-8">
        {data &&
          data.map(({ id, name, price, image }) => {
            return (
              <ListProduct
                key={id}
                id={id}
                name={name}
                price={price}
                image={image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
