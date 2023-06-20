import Image from 'next/image'
import React from 'react'
import Styles from './styles.module.scss'
import Logo from '@/assets/img/logo-padrao.png'
import Link from 'next/link'
import Button from '@/components/atoms/Button'
import UserContext from '@/context/UserContext'
import Router from 'next/router'
import Language from '@/components/molecules/Language'

const Header = () => {
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn
 
  const handleHeaderCtaClick = () => {
    Router.push('/login')
  }

  return (
    <header className={Styles.header}>
      <div className="container d-flex align-items-center justify-content-between">
        <div className={Styles.header__left}>
          <Link href="/">
            <Image src={Logo} height={undefined} width={150} alt="Logo - Greg" />
          </Link>
          {/* <ul className={`${Styles.list} d-lg-flex d-none`}>
            <li className={Styles.list__item}>
              <Link href="#" className={Styles.anchor}>Produtos</Link>
            </li>
            <li className={Styles.list__item}>
              <Link href="#" className={Styles.anchor}>Desenvolvedores</Link>
            </li>
            <li className={Styles.list__item}>
              <Link href="#" className={Styles.anchor}>Preços</Link>
            </li>
          </ul> */}
        </div>
        <div className={Styles.header__alternative}>
        {!logged && (
          <div className={Styles.header__right}>
            {/* <Link href="#" className={`${Styles.anchor} d-lg-inline-block d-none me-3`}>Preços</Link> */}
            <Button
              id='cta'
              label='Sign up'
              hidden={false}
              text="Sign up"
              onClick={() => { handleHeaderCtaClick() }}
            />
          </div>

        )}
        
          {logged && (
            <div className={Styles.header__logged}>
              <Link href="/carteira" className={`${Styles.anchor} d-lg-inline-flex`}>
                { screen.width < 992 ?  <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                <span className=''>{info.email}</span>
                <div className={Styles.picture} />
                </div> : <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span className='me-3'>Hello, {info.email}</span>
                <div className={Styles.picture} />
                </div>  }
               
              </Link>
              <div className={Styles.dropdown}>
                <ul>
                  <Link href={'/carteira'}>
                    <li>Minha carteira</li>
                  </Link>
                  <Link href={'/logout'}>
                    <li>Desconectar</li>
                  </Link>
                </ul>
              </div>
            </div>
          )}
          <Language />
        </div>
      </div>
    </header>
  )
}

export default Header