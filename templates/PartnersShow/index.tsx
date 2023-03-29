import React from 'react'
import Styles from './styles.module.scss'
import Paragraph from '@/components/atoms/Paragraph'
import Content from './content.json'
import Logo from '@/assets/img/logo-branco.png'
import Image from 'next/image'

// 

import bsc from '@/assets/img/partners/bsc.png'
import cl from '@/assets/img/partners/cl.png'
import ethereum from '@/assets/img/partners/ethereum.png'
import polygon from '@/assets/img/partners/polygon.png'
import soulprime from '@/assets/img/partners/soulprime.png'
import stellar from '@/assets/img/partners/stellar.png'
import nforest from '@/assets/img/partners/nforest.png'

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
          <Image src={bsc} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={cl} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={ethereum} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={polygon} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={soulprime} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={stellar} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={nforest} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
        </div>
      </div>
    </section>
  )
}

export default PartnersShow