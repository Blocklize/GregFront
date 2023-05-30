import Title from '@/components/atoms/Title'
import React from 'react'
import Styles from './styles.module.scss'
import Content from './content.json'
import Paragraph from '@/components/atoms/Paragraph'
import Image from 'next/image'

// Images
import CardOne from '@/assets/img/card-1.svg'
import CardTwo from '@/assets/img/card-2.svg'
import Picture from '@/assets/img/Picture.png'
import Isologo from '@/assets/img/simbolo-padrao.png'
import LogoBranco from '@/assets/img/logo-branco.png'
import LoadingIcon from '@/assets/img/loading-example.png'

// Arrow
import Arrow from '@/assets/img/arrow.svg'
import Illustration from '@/assets/img/group.svg'
import { useRouter } from 'next/router'

// languages
import en from '../../public/locales/en/common.json';
import pt from '../../public/locales/pt/common.json';


const HomeIntro = () => {
  const router = useRouter();

  const { locale } = router;

  const t = locale === 'en' ? en : pt

  return (
    <section className={Styles.homeIntro}>
      <Image
        src={Illustration}
        height={undefined}
        width={400}
        className={Styles.homeIntro__illlust}
        alt="Ilustração"
      />
      <div className="container">
        <div className={Styles.homeIntro__content}>
          <Title
            id='homeIntro-title'
            className={Styles.homeIntro__title}
            text={t.disp}
            size={60}
            width={36}
            height={1}
          />
          <Paragraph
            id='homeIntro-desc'
            className={Styles.homeIntro__desc}
            text={t.manage}
            size={20}
            width={48}
            height={1}
          />
        </div>
        <div className={Styles.homeIntro__carousel}>
          <ul>
            {/* Sign In */}
            <li>
              <div className={Styles.example}>
                <div className={Styles.example__body}>
                  <div className={Styles.example__text}>
                    <Paragraph
                      text={t.signIn}

                      size={20}
                    />
                    <div className={Styles.example__line} />
                  </div>
                  <div className={Styles.example__emailBody}>
                    <input type='text' className={Styles.example__emailInput} placeholder='john@doe.com.br' />
                  </div>
                  <div className={Styles.example__buttonBody}>
                    <button className={Styles.example__confirmButton}>
                      <Paragraph
                        size={18}
                        text={t.continueEmail}
                      />
                    </button>
                  </div>
                  <div className={Styles.example__poweredText}>
                    <Paragraph
                      text={t.poweredBy}
                      size={18}
                    />

                      <Image src={LogoBranco} alt='Logo Greg' width={50} height={20} />
                  
                    <div className={Styles.walletCard__separator} />
                  </div>
                </div>
              </div>
            </li>
            {/* Get the code */}
            <li>

              <div className={Styles.example}>
                <div className={Styles.example__body}>
                  <div className={Styles.example__text}>

                    <Paragraph
                      size={20}
                      text={t.getCode}
                    />
                    <div className={Styles.example__line} />
                    <div style={{ width: 260, marginRight: 'auto', marginLeft: 'auto', paddingTop: 12, paddingBottom: 6 }}>

                      <Paragraph
                        size={14}
                        text={t.checkEmail}
                        color='rgba(255, 255, 255, 0.6)'
                      />
                    </div>
                    <div className={Styles.example__code}>

                    <ul>
                      <li key={1}>
                        <div className={Styles.example__point} />
                      </li>
                      <li key={2}>
                        <div className={Styles.example__point} />
                      </li>
                      <li key={3}>
                        <div className={Styles.example__point} />
                      </li>
                      <li key={4}>
                        <div className={Styles.example__point} />
                      </li>
                      <li key={5}>
                        <div className={Styles.example__point} />
                      </li>
                      <li key={6}>
                        <div className={Styles.example__point} />
                      </li>
                     
                    </ul>
                    </div>
                    <div className={Styles.example__loading}>

                    <Image src={LoadingIcon} width={90} height={50} alt='Loading Icon Example' />
                    </div>
                    <div className={Styles.walletCard__separatorBody}>
                    <div className={Styles.walletCard__separator} />
                    </div>
                  </div>
                </div>
              </div>


            </li>
            {/* User Liu Hang Example */}
            <li>
              <div className={Styles.walletCard__userExample}>
                <div className={Styles.walletCard}>
                  <Image
                    src={Isologo}
                    width={80}
                    height={undefined}
                    alt="Picture"
                    className={Styles.walletCard__image}
                  />
                  <div className={Styles.walletCard__content}>
                    <div className={Styles.pictureHolder}>
                      <Image
                        src={Picture}
                        height={100}
                        width={100}
                        alt="Picture"
                        className={Styles.pictureHolder__image}
                      />
                    </div>
                    <div className={Styles.profileInfo}>
                      <h1 className={Styles.profileInfo__title}>
                        Liu Huang
                      </h1>
                      <p className={Styles.profileInfo__id}>
                        <strong>ID</strong>
                        <span>12345678910</span>
                      </p>
                    </div>
                  </div>
                  <div className={Styles.walletCard__separator} />
                </div>
              </div>

            </li>
          </ul>


        </div>
      </div>
    </section>
  )
}

export default HomeIntro