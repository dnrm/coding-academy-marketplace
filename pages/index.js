import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Coding Academy Marketplace | Inicio</title>
      </Head>
      <Navigation />
      <Hero />
    </div>
  )
}
