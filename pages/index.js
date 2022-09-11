import Head from "next/head";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Coding Academy Marketplace | Inicio</title>
      </Head>
      <Navigation />
      <Hero />
      <ProductList />
    </div>
  );
}
