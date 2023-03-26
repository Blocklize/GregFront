import React from 'react'
import Styles from './styles.module.scss'

import Image from 'next/image'

import Icon from '@/assets/img/avax.png'
import Arrow from '@/assets/img/chevron-forward-outline.png'

type Props = {
  onClick?: any,
  value?: number,
  data: any
}

const TokenShow = ({ onClick, data, value = 0 }: Props) => {
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
          src={data.logoURI}
          width={40}
          height={40}
          alt="AVAX Icon"
        />
        <h2>{data.symbol}</h2>
      </div>
      <div className={Styles.tokenShow__balance}>
        <input
          readOnly
          value={value.toFixed(5)}
        />
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