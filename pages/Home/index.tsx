import Header from '@/components/organisms/Header'
import HomeIntro from '@/templates/HomeIntro'
import PartnersShow from '@/templates/PartnersShow'
import ServiceComparison from '@/templates/ServiceComparison'
import Footer from '@/components/organisms/Footer'
import React from 'react'
import StepCascade from '@/templates/StepCascade'
import BoxAdvertisement from '@/templates/BoxAdvertisement'
import CodeCascade from '@/templates/CodeCascade'

const Home = () => {
  return (
    <>
      <Header />
      <HomeIntro />
      <PartnersShow />
      <ServiceComparison />
      <StepCascade />
      <BoxAdvertisement />
      <CodeCascade />
      <Footer />
    </>
  )
}

export default Home