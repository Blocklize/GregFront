import React from 'react'
import { useRouter } from 'next/router'
import UserContext from '@/context/UserContext'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Styles from './styles.module.scss'

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
        console.log(json)
        if (json.accessToken && json.refreshToken) {
          localStorage.setItem('accessToken', json.accessToken)
          localStorage.setItem('refreshToken', json.refreshToken)
          setUserInfo(json.usuarioInfo)
          setLoggedIn(true)
        }
      })
      .finally(() => {
        router.push('/carteira')
      })
  }

  React.useEffect(() => {
    handleUserLogin()
  })


  return (
    <>
      <Header />
      <div className={Styles.loadScreen}>
        <div className={Styles.loadScreen__loader} />
      </div>
      <Footer />
    </>
  )
}

export default LoginToken