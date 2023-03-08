import React from 'react'
import Content from './content.json'
import Styles from './styles.module.scss'
import Link from 'next/link'

import Image from 'next/image'
import Picture from '@/assets/img/Picture.png'
import Isologo from '@/assets/img/simbolo-padrao.png'

import Google from '@/assets/img/google-white.png'
import Apple from '@/assets/img/apple-white.png'
import Twitter from '@/assets/img/twitter-white.png'
import Facebook from '@/assets/img/facebook-white.png'
import Logo from '@/assets/img/logo-branco.png'
import Illustration from '@/assets/img/group.svg'

const FormImage = () => {
  const handleFormCtaClick = () => {
    console.log("Click")
  }

  return (
    <section className={Styles.formImage}>
      <Image
        src={Illustration}
        height={undefined}
        width={400}
        className={Styles.formImage__illlust}
        alt="Ilustração"
      />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className={Styles.secondaryShade}>
            <div className={Styles.walletCard}>
              <Image
                src={Isologo}
                width={60}
                height={undefined}
                alt="Picture"
                className={Styles.walletCard__image}
              />
              <h1 className={Styles.walletCard__title}>
                {Content.title}
              </h1>
              <p className={Styles.walletCard__description}>
                {Content.description}
              </p>
              <div className={Styles.walletCard__content}>
                <div className={Styles.pictureHolder}>
                  <Image
                    src={Picture}
                    height={60}
                    width={60}
                    alt="Picture"
                    className={Styles.pictureHolder__image}
                  />
                </div>
                <div className={Styles.profileInfo}>
                  <h1 className={Styles.profileInfo__title}>
                    Liu Huang
                  </h1>
                  <p className={Styles.profileInfo__id}>
                    Sr. Software Engineer, Decrypt
                  </p>
                </div>
              </div>
              <div className={Styles.walletCard__separator} />
            </div>
          </div>
          <div className="col-lg-6 d-lg-block d-none">

          </div>
          <div className={`${Styles.sectionHeight} col-lg-5 position-relative`}>
            <form action="#" className={Styles.loginForm}>
              <div className={Styles.loginForm__header}>
                Sign in
              </div>
              <div className={Styles.loginForm__body}>
                <div className={Styles.socialLogin}>
                  <h2 className={Styles.socialLogin__title}>
                    Use your social login
                  </h2>
                  <Link href="#">
                    <div className={Styles.socialLogin__option}>
                      <Image
                        src={Google}
                        width={30}
                        height={undefined}
                        alt="Picture"
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className={Styles.socialLogin__option}>
                      <Image
                        src={Apple}
                        width={23}
                        height={undefined}
                        alt="Picture"
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className={Styles.socialLogin__option}>
                      <Image
                        src={Twitter}
                        width={28}
                        height={undefined}
                        alt="Picture"
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className={Styles.socialLogin__option}>
                      <Image
                        src={Facebook}
                        width={40}
                        height={undefined}
                        alt="Picture"
                      />
                    </div>
                  </Link>
                </div>
                <div className={Styles.mailLogin}>
                  <h2 className={Styles.mailLogin__title}>
                    or e-mail
                  </h2>
                  <input
                    className={Styles.mailLogin__input}
                    type="email"
                    placeholder='hello@world.com'
                    required
                  />
                  <button
                    type='submit'
                    className={Styles.mailLogin__submit}
                    onClick={handleFormCtaClick}
                  >
                    Continue with e-mail
                  </button>
                </div>
                <div className={Styles.poweredBy}>
                  <span className={Styles.poweredBy__text}>
                    Powered by
                  </span>
                  <Image
                    src={Logo}
                    width={45}
                    height={undefined}
                    alt="Picture"
                    className={Styles.poweredBy__image}
                  />
                </div>
              </div>
              <div className={Styles.loginForm__separator} />
            </form>
            <p className={Styles.support}>
              Need support? <a href="#">Click here</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormImage