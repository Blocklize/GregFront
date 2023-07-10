import React from 'react'
import Content from './content.json'
import Styles from './styles.module.scss'

import Image from 'next/image'
import Picture from '@/assets/img/Picture2.png'
import Isologo from '@/assets/img/simbolo-padrao.png'


import Illustration from '@/assets/img/group.svg'
import Loginform from '@/components/organisms/LoginForm'


const FormImage = () => {
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
                    João F. Manflin
                  </h1>
                  <p className={Styles.profileInfo__id}>
                    Especialista em investimentos
                  </p>
                </div>
              </div>
              <div className={Styles.walletCard__separator} />
            </div>
          </div>
          <div className="col-lg-6 d-lg-block" />
          <div className={`${Styles.sectionHeight} col-lg-5 position-relative`}>
            <Loginform />
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