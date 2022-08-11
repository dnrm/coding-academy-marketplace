import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { useUserContext } from "../context/UserContext";
import Banner from "../components/Banner";

export default function Home() {
  const { session } = useUserContext();

  return (
    <div className="">
      <Head>
        <title>Coding Academy Marketplace | Inicio</title>
      </Head>
      {session?.userId === null ? <Banner /> : null}
      <Navigation />
      <Hero />
      <ProductList />
    </div>
  );
}
