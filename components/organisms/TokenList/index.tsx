import React from 'react'
import { acceptedTokens } from '@/assets/js/acceptedTokens'
import CoinWallet from '@/components/molecules/CoinWallet'
import Styles from './styles.module.scss'
import TokenInfo from '../TokenInfo'
import Button from '@/components/atoms/Button'

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
  props: any
  setProps: any
  setStep: any
  coins: any
  setCoins: any
}


const AVAX = {
  contract_ticker_symbol: 'AVAX',
  contract_address: '0x85f138bfEE4ef8e540890CFb48F620571d67Eda3',
  contract_name: 'AVAX Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const COMP = {
  contract_ticker_symbol: 'COMP',
  contract_address: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  contract_name: 'COMP Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const AAVE = {
  contract_ticker_symbol: 'AAVE',
  contract_address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
  contract_name: 'AAVE Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const CRV = {
  contract_ticker_symbol: 'CRV',
  contract_address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
  contract_name: 'CRV Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const DAI = {
  contract_ticker_symbol: 'DAI',
  contract_address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  contract_name: 'DAI Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}

type TokenProps = {
  contract_ticker_symbol: string
  contract_address: string
  contract_name: string
  balance: number
  balance_24h: number
  logo_url: string
  quote_rate: number
  quote_rate_24h: number
}
const TokenList = ({ tokens, props, setProps, setStep, coins, setCoins }: Props) => {



  return (
    <>
        <div>
          {tokens.map((t: any) => {
            return (
              <div onClick={() => {
                
                setCoins(t)
                setStep(1)
              }} className={Styles.token}>
                <CoinWallet
                  // onClick={ setStep(1)}
                  props={t}
                  key={t.contract_ticker_symbol}
                />
              </div>
            )
          })}
          <div onClick={(() => {

            setCoins(AVAX)
            setStep(1)
          })} className={Styles.token}>

            <CoinWallet onClick={setStep} props={AVAX} />
          </div>
          <div onClick={(() => {

            setCoins(AAVE)
            setStep(1)
          })} className={Styles.token}>

            <CoinWallet onClick={setStep} props={AAVE} />
          </div>
          <div onClick={(() => {

            setCoins(CRV)
            setStep(1)
          })} className={Styles.token}>

            <CoinWallet onClick={setStep} props={CRV} />
          </div>
          <div onClick={(() => {

            setCoins(DAI)
            setStep(1)
          })} className={Styles.token}>

            <CoinWallet onClick={setStep} props={DAI} />
          </div>
          <div onClick={(() => {

            setCoins(COMP)
            setStep(1)
          })} className={Styles.token}>

            <CoinWallet onClick={setStep} props={COMP} />
          </div>
        </div>
      
      {/* <TokenInfo tokens={tokens} />  */}
    </>
  )
}

export default TokenList