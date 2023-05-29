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
import celo1 from '@/assets/img/partners/celo1.png'

// languages
import en from '../../public/locales/en/common.json'
import pt from '../../public/locales/pt/common.json'
import { useRouter } from 'next/router'

const PartnersShow = () => {
  const router = useRouter();

  const { locale } = router;

  const t = locale === 'en' ? en : pt

  return (
    <section className={Styles.partnersShow}>
      <div className="container">
        <Paragraph
          id='homeIntro-desc'
          className={Styles.partnersShow__desc}
          text={t.useGreg}
          size={20}
          width={48}
          height={1}
        />
        <div className={Styles.partnersShow__carousel}>
          <Image src={bsc} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={celo1} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={ethereum} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={polygon} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          <Image src={stellar} height={undefined} width={120} className={Styles.partnersShow__logo} alt="Card com formulário de login" />
          
        </div>
      </div>
    </section>
  )
}

export default PartnersShow