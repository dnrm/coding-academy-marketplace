import React, { useState } from "react";
import ListProduct from "./ListProduct";

const ProductList = ({ products }) => {
  const [productData, setProductData] = useState(products || []);

  return (
    <div className="list p-4 md:p-8 flex flex-col gap-4">
      <h1 className="text-xl md:text-4xl lg:text-4xl font-bold font-primary tracking-tighter pb-2">
        Más Vendidos ⭐️
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 flex-nowrap overflow-x-auto overflow-y-hidden gap-4 md:gap-8">
        {productData &&
          productData.map(({ id, name, price, image }) => {
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
