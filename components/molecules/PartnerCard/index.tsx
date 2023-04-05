import React from 'react'
import Styles from './styles.module.scss'
import Image from 'next/image'

import cl from '@/assets/img/partners/cl.png'
import nf from '@/assets/img/partners/nf.png'
import sp from '@/assets/img//partners/sp.png'

type Props = {
  image: number,
  title: string,
  desc: string
}

const PartnerCard = ({ image, title, desc }: Props) => {
  const Images = [cl, nf, sp]

  return (
    <div className={Styles.partnerCard}>
      <div className={Styles.partnerCard__image}>
        <Image
          width={50}
          height={50}
          alt="Network icon"
          src={Images[image]}
        />
      </div>
      <div className={Styles.partnerCard__info}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default PartnerCard