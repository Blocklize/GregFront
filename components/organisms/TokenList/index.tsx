import React from 'react'
import { acceptedTokens } from '@/assets/js/acceptedTokens'
import CoinWallet from '@/components/molecules/CoinWallet'
import Styles from './styles.module.scss'

type Props = {
  onClick?: any,
  chain: string,
  address: string
}
const TokenList = ({ onClick, chain, address }: Props) => {
  const [tokens, setTokens] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('eth-mainnet')
  
  
  
  
  React.useEffect(() => {
    const url = `https://api.covalenthq.com/v1/${chain}/address/${address}/balances_v2/?&key=cqt_rQDFycmjQqmCmxHw46TqrcHW4rBQ`
    setLoading(true)
     fetch(url)
      .then((res) => res.json())
      .then((json) => {
       
        const strJson = Object?.values(json.data.items);
   
        setTokens(strJson)
      })
      .catch((error) => {
        throw error
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 3000);
      })
      
      setText(chain);

  }, [chain]);
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