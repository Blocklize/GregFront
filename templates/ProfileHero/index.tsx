import React from 'react'
import Styles from './styles.module.scss'

import Picture from '@/assets/img/Picture.png'
import WalletIcon from '@/assets/img/wallet-outline.png'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import Search from '@/components/atoms/Search'
import TokenShow from '@/components/molecules/TokenShow'

const ProfileHero = () => {
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
                />
              </div>
              <div className={Styles.profileInfo__user}>
                <h1>Liu Huang</h1>
                <p>
                  <strong>ID</strong>
                  <span>12345678910</span>
                </p>
              </div>
              <div className={Styles.profileInfo__data}>
                <div />
                <div />
              </div>
              <Button
                id='cta'
                label='Desconectar'
                text='Desconectar'
                hidden={false}
                onClick={() => { console.log("Teste") }}
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
                    <span>10.321,00</span>
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
                <TokenShow />
                <TokenShow />
                <TokenShow />
                <TokenShow />
                <TokenShow />
                <TokenShow />
                <TokenShow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHero