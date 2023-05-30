import React from 'react'
import { acceptedTokens } from '@/assets/js/acceptedTokens'
import CoinWallet from '@/components/molecules/CoinWallet'
import Styles from './styles.module.scss'

type Props = {
  onClick?: any,
  chain: string
}
const TokenList = ({ onClick, chain }: Props) => {
  const [tokens, setTokens] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState('eth-mainnet')
  
  
  
  
  React.useEffect(() => {
    console.log(chain)
    
    console.log('api text: ',text)
    const url = `https://api.covalenthq.com/v1/${chain}/address/0xA74e9c2C1854260316f9e2333F30E2F30754dbEa/balances_v2/?&key=cqt_rQDFycmjQqmCmxHw46TqrcHW4rBQ`
    setLoading(true)
     fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        const strJson = Object?.values(json.data.items);
        console.log('json: ',json)
        console.log('strJson: ', strJson)
        console.log(tokens)
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
 console.log(tokens)
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