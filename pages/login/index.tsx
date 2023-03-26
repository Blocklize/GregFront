import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import React from 'react'
import FormImage from '@/templates/FormImage'
import { useRouter } from 'next/router'
import UserContext from '@/context/UserContext'
import Styles from './styles.module.scss'

const Home = () => {
  const router = useRouter()
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn

  React.useEffect(() => {
    if (logged) {
      router.push('/carteira')
    }
  }, [logged])

  if (!logged) {
    return (
      <>
        <Header />
        <FormImage />
        <Footer />
      </>
    )
  } else {
    return (
      <div className={Styles.loadScreen}>
        <div className={Styles.loadScreen__loader} />
      </div>
    )
  }
}

export default Home