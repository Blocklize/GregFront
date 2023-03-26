import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import React from 'react'
import FormImage from '@/templates/FormImage'
import { useRouter } from 'next/router'
import UserContext from '@/context/UserContext'
import Styles from './styles.module.scss'
import { Head } from 'next/document'

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
        <Head>
          <title>Greg | Login</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="theme-color" content="#FF4900" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="Greg | Login." />
        </Head>
        <Header />
        <FormImage />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>Greg | Redirecionando</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="theme-color" content="#FF4900" />
          <meta name="robots" content="no-index, no-follow" />
          <meta name="description" content="Greg | Redirecionando." />
        </Head>
        <div className={Styles.loadScreen}>
          <div className={Styles.loadScreen__loader} />
        </div>
      </>
    )
  }
}

export default Home