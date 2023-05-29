import React from 'react'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import ProfileHero from '@/templates/ProfileHero'
import UserContext from '@/context/UserContext'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Carteira = () => {
  const router = useRouter()
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn


  return (
    <>
      <Head>
        <title>Greg | {info?.email || "Carteira"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#FF4900" />
        <meta name="robots" content="no-index, no-follow" />
        <meta name="description" content="Greg | Carteira." />
      </Head>
      <Header />
      <ProfileHero />
      <Footer />
    </>
  )
}

export default Carteira