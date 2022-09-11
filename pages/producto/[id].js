import React from "react";
import { PrismaClient } from "@prisma/client";
import Navigation from "../../components/Navigation";
import ProductLayout from "../../components/ProductLayout";

const Product = ({ product }) => {
  return <ProductLayout product={product}></ProductLayout>;
};

export default Product;

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const product = await prisma.product.findUnique({
    where: { id: context.query.id },
  });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
