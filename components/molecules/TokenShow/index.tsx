import React from 'react'
import Styles from './styles.module.scss'

import Image from 'next/image'

import Icon from '@/assets/img/avax.png'
import Arrow from '@/assets/img/chevron-forward-outline.png'

type Props = {
  onClick?: any,
  data: {
    contract_ticker_symbol: string,
    contract_address: string,
    balance: number,
    balance_24h: number,
    logo_url: string,
    quote_rate: number,
    quote_rate_24h: number,
  }
}

const TokenShow = ({ onClick, data }: Props) => {

  const handleClickFunction = () => {
    onClick()
  }

  return (
    <div
      className={Styles.tokenShow}
      onClick={() =>  handleClickFunction() }
    >
      <div className={Styles.tokenShow__info}>
        <Image
          src={data.logo_url}
          width={40}
          height={40}
          alt="Token Icon"
        />
        <h2  >{data.contract_ticker_symbol}</h2>
      </div>
      <div className={Styles.tokenShow__balance}>
        <input
          readOnly
          value={Number(data.balance_24h).toFixed(5)}
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