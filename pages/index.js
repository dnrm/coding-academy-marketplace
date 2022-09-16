import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { getAllProducts } from "../lib/database";
import Navigation from "../components/Navigation";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Coding Academy Marketplace | Inicio</title>
      </Head>
      <Navigation />
      <Hero />
      <ProductList products={products} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
