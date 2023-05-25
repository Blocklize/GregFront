import React from 'react'
import { acceptedTokens } from '@/assets/js/acceptedTokens'
import CoinWallet from '@/components/molecules/CoinWallet'
import Styles from './styles.module.scss'
import axios from 'axios'
import { Network, Alchemy } from 'alchemy-sdk'

type Props = {
  onClick?: any
}
const TokenList = ({ onClick }: Props) => {
  const [tokens, setTokens] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);

  const handleTokens = async () => {
    const url = 'https://api.covalenthq.com/v1/eth-mainnet/address/0xA74e9c2C1854260316f9e2333F30E2F30754dbEa/balances_v2/?&key=cqt_rQDFycmjQqmCmxHw46TqrcHW4rBQ'
      setLoading(true)
      await fetch(url)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          const strJson = Object?.values(json.data.items);
          console.log('json: ',json)
           const mappedItems: any[] = [];
          strJson.forEach((item: any) => {
            if (acceptedTokens.includes(item.contract_ticker_symbol)) mappedItems.push(item);
          });
          console.log(mappedItems)
         
          function compare(a: any, b: any) {
            if (a.symbol < b.symbol) return -1;
            if (a.symbol > b.symbol) return 1;
            return 0;
          }
          mappedItems.sort(compare);
          console.log('compare mapped Items: ', mappedItems)
          setTimeout(() => {
            setTokens(mappedItems);
            
          }, 1500);
          console.log(tokens)
        })
        .catch((error) => {
          throw error
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false)
          }, 3000);
        })
    };

  React.useEffect(() => {
    handleTokens();
  }, []);
tokens.map((t: any) => {
  console.log(t.contract_address)
})
  return (
    <>
      {!loading &&
        tokens.length > 0 &&
        tokens.map((t: any) => (
          <CoinWallet
            props={t.contract_address}
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