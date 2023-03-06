import React from 'react'
import Styles from './styles.module.scss'
import Paragraph from '@/components/atoms/Paragraph'
import Content from './content.json'
import Logo from '@/assets/img/logo-branco.png'
import Image from 'next/image'

const PartnersShow = () => {
  return (
    <section className={Styles.partnersShow}>
      <div className="container">
        <Paragraph
          id='homeIntro-desc'
          className={Styles.partnersShow__desc}
          text={Content.description}
          size={20}
          width={48}
          height={1}
        />
        <div className={Styles.partnersShow__carousel}>
          <Image src={Logo} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={Logo} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={Logo} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={Logo} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={Logo} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={Logo} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
        </div>
      </div>
    </section>
  )
}

export default PartnersShow