import React from 'react'
import Styles from './styles.module.scss'
import Image from 'next/image'

import Ethereum from '@/assets/img/eth.png'
import Polygon from '@/assets/img/polygon.png'
import Stellar from '@/assets/img/stellar.png'

type Props = {
  image: number,
  title: string,
  desc: string
}

const PartnerCard = ({ image, title, desc }: Props) => {
  const Images = [Polygon, Ethereum, Stellar]

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