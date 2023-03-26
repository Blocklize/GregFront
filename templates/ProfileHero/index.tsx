import React from 'react'
import Styles from './styles.module.scss'
import { useRouter } from 'next/router'

import Picture from '@/assets/img/avatar.png'
import WalletIcon from '@/assets/img/wallet-outline.png'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import Search from '@/components/atoms/Search'
import TokenList from '@/components/organisms/TokenList'
import TokenInfo from '@/components/organisms/TokenInfo'
import Checkout from '@/components/organisms/Checkout'
import UserContext from '@/context/UserContext'

const ProfileHero = () => {
  const router = useRouter()
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn
  const [step, setStep] = React.useState(0)

  const onClickHandler = () => {
    setStep(step + 1)
  }

  const handleUsername = () => {
    if (info) {
      return info.email.split("@")[0]
    }
  }

  React.useEffect(() => {
    if (!logged) {
      router.push('/login')
    }
  }, [])

  if (logged) {
    return (
      <div className={Styles.profileHero}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3">
              <div className={Styles.profileInfo}>
                <div className={Styles.profileInfo__picture}>
                  <Image
                    width={130}
                    height={130}
                    src={Picture}
                    alt="Picture"
                    className={Styles.rounded}
                  />
                </div>
                <div className={Styles.profileInfo__user}>
                  <h1>{handleUsername()}</h1>
                  <p>
                    <strong>ID</strong>
                    <span>MISSING_INFO</span>
                  </p>
                </div>
                <div className={Styles.profileInfo__data}>
                  <div>
                    <span>
                      <strong>Main wallet: </strong>
                      <input type="text" readOnly value={info?.walletAddress || "Error, try refresh the page"} />
                    </span>
                  </div>
                  <div>
                    <span>
                      <strong>Stellar wallet: </strong>
                      <input type="text" readOnly value={info?.stellarWalletAddress || "Error, try refresh the page"} />
                    </span>
                  </div>
                </div>
                <Button
                  id='cta'
                  label='Desconectar'
                  text='Desconectar'
                  hidden={false}
                  onClick={() => { router.push('/logout') }}
                  className="fw-bold"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className={Styles.wallet}>
                <div className={Styles.wallet__header}>
                  <Search />
                  <div className={Styles.balance}>
                    <h1 className={Styles.balance__value}>
                      BRL
                      <span>0,00</span>
                      <Image
                        width={25}
                        height={undefined}
                        src={WalletIcon}
                        alt="Wallet Icon"
                      />
                    </h1>
                  </div>
                </div>
                <div className={Styles.wallet__body}>
                  {step == 0 && <TokenList onClick={onClickHandler} />}
                  {step == 1 && <TokenInfo buy={onClickHandler} />}
                  {step == 2 && <Checkout />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={Styles.loadScreen}>
        <div className={Styles.loadScreen__loader} />
      </div>
    )
  }
}

export default ProfileHero