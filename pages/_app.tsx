import '@/styles/globals.scss'
import "bootstrap/dist/css/bootstrap.min.css"

import type { AppProps } from 'next/app'
import { useState, useEffect } from "react"
import UserContext from '@/context/UserContext'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const [userInfo, setUserInfo] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let token = localStorage.getItem('accessToken')
    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }
    if (token) {
      fetch('https://greg.blocklize.io/auth/userInfo', config)
      .then(resp => resp.json())
      .then(json => {
        setUserInfo(json)
        setLoggedIn(true)
      })
      .finally(() => {
        if (loggedIn) {
          router.push('/carteira')
        }
      })
    } else {
      setLoggedIn(false)
    }
  }, [])

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo: [userInfo, setUserInfo],
        loggedIn: [loggedIn, setLoggedIn]
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}
