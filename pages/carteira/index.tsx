import React from 'react'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import ProfileHero from '@/templates/ProfileHero'
import UserContext from '@/context/UserContext'
import { useRouter } from 'next/router'

const Carteira = () => {
  const router = useRouter()
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn

  
  return (
    <>
      <Header />
      <ProfileHero />
      <Footer />
    </>
  )
}

export default Carteira