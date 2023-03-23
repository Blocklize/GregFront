import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Styles from './styles.module.scss'
import Google from '@/assets/img/google-white.png'
import Apple from '@/assets/img/apple-white.png'
import Twitter from '@/assets/img/twitter-white.png'
import Facebook from '@/assets/img/facebook-white.png'
import Logo from '@/assets/img/logo-branco.png'
import FormFeedback from '@/components/molecules/FormFeedback'

const Loginform = () => {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [feedback, setFeedback] = React.useState<boolean | null>(null)
  const [formStep, setFormStep] = React.useState(0)
  const InputRef = React.useRef<any>(null)

  const handleFormCtaClick = () => {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": email })
    }
    setLoading(true)
    fetch('https://greg.blocklize.io/auth/requestLogin', config)
      .then((resp) => {
        setFeedback(resp.ok)
      })
      .finally(() => {
        setLoading(false)
        setFormStep(1)
      })
  }

  const handleInput = () => {
    setEmail(InputRef.current.value)
  }

  const handleLoading = () => {
    return loading ? Styles.loading : undefined
  }

  return (
    <article className={`${Styles.loginForm} ${handleLoading()}`}>
      <div className={Styles.loginForm__header}>
        Sign in
      </div>
      {formStep === 0 && (
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
              ref={InputRef}
              onInput={handleInput}
              required
            />
            <button
              type='button'
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
      )}

      {formStep === 1 && <FormFeedback type={feedback} />}
      <div className={Styles.loginForm__separator} />
    </article>
  )
}

export default Loginform