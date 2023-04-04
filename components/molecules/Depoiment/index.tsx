import React from 'react'
import Image from 'next/image'
import Styles from './styles.module.scss'
import Isologo from '@/assets/img/simbolo-padrao.png'

import One from '@/assets/img/Picture.png'
import Two from '@/assets/img/Picture2.png'
import Three from '@/assets/img/Picture3.png'

type Props = {
  content: any
}

const Depoiment = ({ content }: Props) => {
  const Pictures = [One, Two, Three]
  return (
    <div className={Styles.walletCard}>
      <Image
        src={Isologo}
        width={60}
        height={undefined}
        alt="Picture"
        className={Styles.walletCard__image}
      />
      <h1 className={Styles.walletCard__title}>
        {content.title}
      </h1>
      <p className={Styles.walletCard__description}>
        {content.description}
      </p>
      <div className={Styles.walletCard__content}>
        <div className={Styles.pictureHolder}>
          <Image
            src={Pictures[content.image]}
            height={60}
            width={60}
            alt="Picture"
            className={Styles.pictureHolder__image}
          />
        </div>
        <div className={Styles.profileInfo}>
          <h1 className={Styles.profileInfo__title}>
            {content.name}
          </h1>
          <p className={Styles.profileInfo__id}>
            {content.role}
          </p>
        </div>
      </div>
      <div className={Styles.walletCard__separator} />
    </div>
  )
}

export default Depoiment