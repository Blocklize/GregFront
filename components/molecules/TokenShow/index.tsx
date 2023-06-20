import React from 'react'
import Styles from './styles.module.scss'

import Image from 'next/image'


import EthIcon from '@/assets/img/eth.png'
import BSCIcon from '@/assets/img/BNB-Icon.svg'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import AvaxIcon from '@/assets/img/avalanche-avax-icon.svg'
import CompIcon from '@/assets/img/comp.png'
import AaveIcon from '@/assets/img/aave.png'
import CrvIcon from '@/assets/img/crv.png'
import DaiIcon from '@/assets/img/dai.png'
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

const TokenShow = ({ data }: Props) => {

  function chainIcon(data: any) {
    switch (data.contract_ticker_symbol) {
      case "ETH": return EthIcon
      case "MATIC": return MaticIcon
      case "BNB": return BSCIcon
      case "AVAX": return AvaxIcon
      case "COMP": return CompIcon
      case "AAVE": return AaveIcon
      case "CRV": return CrvIcon
      case "DAI": return DaiIcon
    }
  }
  return (
    <div
      className={Styles.tokenShow}
   
    >
      <div className={Styles.token}>

      <div className={Styles.tokenShow__info}>
        <Image
          src={chainIcon(data)}
          width={40}
          height={40}
          alt="Token Icon"
        />
        <h2 >{data.contract_ticker_symbol}</h2>
      </div>
      <div className={Styles.tokenShow__balance}>
      <p>
      {Number(data.balance_24h).toFixed(5)}
      </p>
      </div>
      </div>
    </div>
  )
}

export default TokenShow