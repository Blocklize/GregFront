import Header from '@/components/organisms/Header'
import HomeIntro from '@/templates/HomeIntro'
import PartnersShow from '@/templates/PartnersShow'
import ServiceComparison from '@/templates/ServiceComparison'
import Footer from '@/components/organisms/Footer'
import React from 'react'
import CodeCascade from '@/templates/CodeCascade'
import FeaturesAccordion from '@/templates/FeaturesAccordion'
import Head from 'next/head'
import DepoimentsCarousel from '@/templates/DepoimentsCarousel'

const Home = () => {
  return (
    <>
      <Head>
        <title>Greg | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#FF4900" />
        <meta name="robots" content="no-index, no-follow" />
        <meta name="description" content="Greg | Home." />
      </Head>
      <Header />
      <HomeIntro />
      <PartnersShow />
      <ServiceComparison />
      <FeaturesAccordion />
      <DepoimentsCarousel />
      <CodeCascade />
      <Footer />
    </>
  )
}

export default Home