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
      fetch('https://greg-api.blocklize.io/auth/userInfo', config)
        .then(resp => resp.json())
        .then(json => {
          if (json.email) {
            setUserInfo(json)
            setLoggedIn(true)
          } else {
            localStorage.clear()
          }
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
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
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
