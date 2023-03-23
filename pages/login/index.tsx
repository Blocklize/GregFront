import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import React from 'react'
import FormImage from '@/templates/FormImage'
import { useRouter } from 'next/router'
import UserContext from '@/context/UserContext'

const Home = () => {
  const router = useRouter()
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn

  React.useEffect(() => {
    console.log(logged)
    if (logged) {
      router.push('/carteira')
    }

  }, [logged])

  return (
    <>
      <Header />
      <FormImage />
      <Footer />
    </>
  )
}

export default Home