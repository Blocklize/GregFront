import React from 'react'
import { acceptedTokens } from '@/assets/js/acceptedTokens'
import CoinWallet from '@/components/molecules/CoinWallet'
import Styles from './styles.module.scss'

type Props = {
  onClick?: any
}

const TokenList = ({ onClick }: Props) => {
  const [tokens, setTokens] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);

  const handleTokens = async () => {
    setLoading(true)
    await fetch("https://api.1inch.io/v4.0/137/tokens")
      .then((resp) => resp.json())
      .then((json) => {
        const strJson = Object.values(json.tokens);
        const mappedItems: any[] = [];
        strJson.forEach((item: any) => {
          if (acceptedTokens.includes(item.symbol)) mappedItems.push(item);
        });
        function compare(a: any, b: any) {
          if (a.symbol < b.symbol) return -1;
          if (a.symbol > b.symbol) return 1;
          return 0;
        }
        mappedItems.sort(compare);
        setTimeout(() => {
          setTokens(mappedItems);
        }, 1500);
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

  return (
    <>
      {!loading &&
        tokens.length > 0 &&
        tokens.map((t: any) => (
          <CoinWallet
            props={t}
            key={t.symbol}
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