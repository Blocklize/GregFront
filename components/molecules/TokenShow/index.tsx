import React from 'react'
import Styles from './styles.module.scss'

import Image from 'next/image'

import Icon from '@/assets/img/avax.png'
import Arrow from '@/assets/img/chevron-forward-outline.png'

type Props = {
  onClick?: any
}

const TokenShow = ({ onClick }: Props) => {
  const handleClickFunction = () => {
    onClick()
  }

  return (
    <div
      className={Styles.tokenShow}
      onClick={() => { handleClickFunction() }}
    >
      <div className={Styles.tokenShow__info}>
        <Image
          src={Icon}
          width={40}
          height={undefined}
          alt="AVAX Icon"
        />
        <h2>AVAX</h2>
      </div>
      <div className={Styles.tokenShow__balance}>
        <h2>
          32.12456
        </h2>
        <Image
          width={7}
          src={Arrow}
          height={undefined}
          className={Styles.chevron}
          alt="AVAX Icon"
        />
      </div>
    </div>
  )
}

export default TokenShow