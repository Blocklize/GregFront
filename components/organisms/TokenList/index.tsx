import React from 'react'
import { acceptedTokens } from '@/assets/js/acceptedTokens'
import CoinWallet from '@/components/molecules/CoinWallet'
import Styles from './styles.module.scss'

type Props = {
  tokens: {
      contract_address: string,
      balance_24h: string
      contract_decimals: number
      contract_name: string
      contract_ticker_symbol: string
      pretty_quote: string
      pretty_quote_24h: string
      quote: number
      quote_24h: number
      quote_rate: number
      quote_rate_24h: number
  }[]
  onClick?: any,
}
const TokenList = ({ onClick, tokens }: Props) => {
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('matic-mainnet')
  
  
  return (
    <>
      {!loading &&
        tokens.length > 0 &&
        tokens.map((t: any) => (
          <CoinWallet
            onClick={onClick}
            props={t}
            key={t.contract_ticker_symbol}
          />
        ))}
      {loading && (
        <div className={Styles.loadScreen}>
          <div className={Styles.loadScreen__loader} />
        </div>
      )}
    </>
  )
}

export default TokenList