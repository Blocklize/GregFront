import React from 'react'
import { useRouter } from 'next/router'
import UserContext from '@/context/UserContext'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Styles from './styles.module.scss'

const Logout = () => {
  const router = useRouter()
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn

  const handleUserLogout = () => {
    setUserInfo({})
    setLoggedIn(false)
    localStorage.clear()
    router.push('/login')
  }

  React.useEffect(() => {
    handleUserLogout()
  }, [])


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

export default Logout