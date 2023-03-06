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

// Arrow
import Arrow from '@/assets/img/arrow.svg'
import Illustration from '@/assets/img/group.svg'

const HomeIntro = () => {
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
            text={Content.title}
            size={72}
            width={18}
            height={1}
          />
          <Paragraph
            id='homeIntro-desc'
            className={Styles.homeIntro__desc}
            text={Content.description}
            size={20}
            width={48}
            height={1}
          />
        </div>
        <div className={Styles.homeIntro__carousel}>
          <Image src={CardOne} height={300} width={undefined} className={Styles.homeIntro__card} alt="Card com formulário de login" />
          <Image src={Arrow} height={undefined} width={20} alt="Ilustração de seta" />
          <Image src={CardTwo} height={300} width={undefined} className={Styles.homeIntro__card} alt="Card com formulário de código" />
          <Image src={Arrow} height={undefined} width={20} alt="Ilustração de seta" />

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
      </div>
    </section>
  )
}

export default HomeIntro