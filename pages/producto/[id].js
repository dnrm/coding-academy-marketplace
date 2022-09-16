import React from "react";
import { prisma } from "../../lib/database";
import ProductLayout from "../../components/ProductLayout";

const Product = ({ product }) => {
  return <ProductLayout product={product}></ProductLayout>;
};

export default Product;

export async function getStaticProps({ params }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: {
      Category: true,
    }
  });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
    revalidate: parseInt(process.env.REVALIDATE_TIME) || 10,
  };
}

export async function getStaticPaths() {
  const products = await prisma.product.findMany();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}
