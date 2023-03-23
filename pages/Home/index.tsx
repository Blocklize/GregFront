import Header from '@/components/organisms/Header'
import HomeIntro from '@/templates/HomeIntro'
import PartnersShow from '@/templates/PartnersShow'
import ServiceComparison from '@/templates/ServiceComparison'
import Footer from '@/components/organisms/Footer'
import React from 'react'
import BoxAdvertisement from '@/templates/BoxAdvertisement'
import CodeCascade from '@/templates/CodeCascade'
import FeaturesAccordion from '@/templates/FeaturesAccordion'

const Home = () => {
  return (
    <>
      <Header />
      <HomeIntro />
      <PartnersShow />
      <ServiceComparison />
      <FeaturesAccordion />
      <BoxAdvertisement />
      <CodeCascade />
      <Footer />
    </>
  )
}

export default Home