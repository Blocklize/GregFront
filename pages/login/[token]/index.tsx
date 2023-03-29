import React from 'react'
import { useRouter } from 'next/router'
import UserContext from '@/context/UserContext'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Styles from './styles.module.scss'
import Head from 'next/head'

const LoginToken = () => {
  const router = useRouter()
  const token = router.query.token
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn

  const handleUserLogin = () => {
    const config = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'tokenId': token
      })
    }
    fetch('https://greg.blocklize.io/auth/login', config)
      .then(resp => resp.json())
      .then(json => {
        if (json.accessToken && json.refreshToken) {
          localStorage.setItem('accessToken', json.accessToken)
          localStorage.setItem('refreshToken', json.refreshToken)
          setUserInfo(json.usuarioInfo)
          setLoggedIn(true)
          router.push('/carteira')
        } else {
          router.push("/login")
        }
      })
  }

  React.useEffect(() => {
    handleUserLogin()
  })


  return (
    <>
      <Head>
        <title>Greg | Redirecionando</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#FF4900" />
        <meta name="robots" content="no-index, no-follow" />
        <meta name="description" content="Greg | Redirecionando." />
      </Head>
      <Header />
      <div className={Styles.loadScreen}>
        <div className={Styles.loadScreen__loader} />
      </div>
      <Footer />
    </>
  )
}

export default LoginToken