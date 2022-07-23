import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'

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
  )
}
