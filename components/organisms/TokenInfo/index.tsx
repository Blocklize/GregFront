import Image from 'next/image'
import React from 'react'
import Styles from './style.module.scss'

//Tokens icons
import EthIcon from '@/assets/img/eth.png'
import BSCIcon from '@/assets/img/BNB-Icon.svg'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import AvaxIcon from '@/assets/img/avalanche-avax-icon.svg'
import CompIcon from '@/assets/img/comp.png'
import AaveIcon from '@/assets/img/aave.png'
import CrvIcon from '@/assets/img/crv.png'
import DaiIcon from '@/assets/img/dai.png'

import Button from '@/components/atoms/Button'
import TokenList from '../TokenList'
import { CaretUp, CaretDown } from '@phosphor-icons/react'
import Checkout from '../Checkout'
import CoinsDropdown from '@/components/molecules/CoinsDropdown/CoinsDropdown'

type Props = {
  tokens: any
  allTokens?: any
  onClick?: any
  onClick2?: any
  setStep: any
  setValue: any
  setDollarCot: any
  value: any
  dollarCot: any
  setCoins: any
  coins: any
  }

const TokenInfo = ({ tokens, coins, setCoins, allTokens, setStep, value, setValue, dollarCot, setDollarCot }: Props) => {
  function handleCoins(data: any) {
    setCoins(data)
  }
 
  const today = new Date();
  const lastMonth = today.getMonth() - 1;
  const anotherDay = new Date(today.getFullYear(), lastMonth, today.getDate());
  const todayDate = today.toISOString().slice(0, 10);
  const anotherDayDate = anotherDay.toISOString().slice(0, 10);
  const [loading, setLoading] = React.useState(true)
  const API_KEY = "cqt_rQDFycmjQqmCmxHw46TqrcHW4rBQ"; // Covalent apiKey
  const EthMainnet = "eth-mainnet"
  const BscMainnet = "bsc-mainnet"
  const TICKET = "USD";
  const EthAddress = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
  const ADDRESS = tokenAddress(coins?.contract_ticker_symbol)
  const [buy, setBuy] = React.useState(false)

  const url = "https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/" + EthMainnet + "/" + TICKET + "/" + ADDRESS + "/?from=" + todayDate + "&to=" + anotherDayDate + "&key=" + API_KEY;
  const urlBsc = "https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/" + BscMainnet + "/" + TICKET + "/" + EthAddress + "/?from=" + todayDate + "&to=" + anotherDayDate + "&key=" + API_KEY;
  


  function tokenAddress(data: any) {
    switch (data) {
      case "ETH": return "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
      case "MATIC": return "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
      case "BNB": return "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
      case "AVAX": return "0x85f138bfEE4ef8e540890CFb48F620571d67Eda3"
      case "COMP": return "0xc00e94Cb662C3520282E6f5717214004A7f26888"
      case "AAVE": return "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
      case "CRV": return "0xD533a949740bb3306d119CC777fa900bA034cd52"
      case "DAI": return "0x6B175474E89094C44Da98b954EedeAC495271d0F"

    }
  }
  function formatteAddress(data: any) {
    switch (data) {
      case "ETH": return "0x2170ed08..."
      case "MATIC": return "0x7D1AfA7B..."
      case "BNB": return "0xB8c77482..."
      case "AVAX": return "0x85f138bf..."
      case "COMP": return "0xc00e94Cb..."
      case "AAVE": return "0x7Fc66500..."
      case "CRV": return "0xD533a949..."
      case "DAI": return "0x6B175474..."

    }
  }

 
  function chainIcon(data: any) {
    switch (data) {
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
  const handleLoading = () => {
    return loading ? Styles.loading : undefined
  }
 
  React.useEffect(() => {
    if (coins?.contract_ticker_symbol == 'ETH') {
      fetch(urlBsc)
        .then((resp) => resp.json())
        .then((data) => {
          setValue(data.data[0].items)
          setLoading(false)
        })

    } else {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setValue(data.data[0].items)
         

        })

    }

  }, [coins])
  React.useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
      .then((resp) => resp.json())
      .then((data) => {
        setDollarCot(data.USDBRL.bid)
        setTimeout(() => {

          setLoading(false)
        }, 300)
      })

  }, [])
 



  return (
    <div>
        <div className={`${Styles.tokenInfo} ${handleLoading()}`}>
          {loading ?
            <div className={Styles.loadScreen}>

              <div className={Styles.loadScreen__loader} />
            </div> :
            <div>
              <div className={Styles.info}>
                <div className={Styles.tokenImg}>
                  <Image
                    src={chainIcon(coins.contract_ticker_symbol)}
                    width={500}
                    height={500}
                    className={Styles.tokenInfo__image}
                    alt={`${coins.contract_ticker_symbol} Icon`}
                  />
                </div>
                <div className="col-xl-8">
                  <div className={Styles.tokenData}>
                    <div className={Styles.container}>
                      <div className={Styles.container__data}>
                        <div className={Styles.tokenData__name}>
                          <h1>{value[1]?.contract_metadata.contract_name}</h1>
                          <p>{coins.contract_ticker_symbol}</p>
                        </div>
                        <div className={Styles.tokenData__info}>
                          <span>Valor BRL</span>
                          <strong>
                            {(value[1]?.price) * dollarCot > (value[2]?.price) * dollarCot ?
                              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                                <p style={{ color: '#48cf69', marginBottom: 0 }}>
                                  {(value[1]?.price * dollarCot).toString().slice(0,10)}
                                </p>
                                <CaretUp size={20} color="#48cf69" weight="fill" />
                              </div> :
                              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                                <p style={{ color: '#F04A4A', marginBottom: 0 }}>
                                  {(value[1]?.price * dollarCot).toString().slice(0,10)}
                                </p>
                                <CaretDown size={20} color="#F04A4A" weight="fill" />
                              </div>}
                          </strong>
                        </div>
                        <div className={Styles.tokenData__info}>
                          <div>

                          <span>Código do token</span>
                          </div>
                          <div className={Styles.tokenData__address}>

                          <strong>{formatteAddress(coins.contract_ticker_symbol)}</strong>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 position-relative ">
                       
                        <Button
                          id='cta-comprar'
                          label='Call to Action'
                          hidden={false}
                          text="Comprar"
                          className={Styles.customCTA}
                          onClick={(() => {
                            setStep(2)
                            setBuy(true)
                           
                          })}
                        />
                        <Button
                          id='cta-vender'
                          label='Call to Action'
                          hidden={false}
                          text="Vender"
                          disabled
                          className={`${Styles.customCTA} ${Styles.secondCTA}`}
                          onClick={() => { }}
                        />
                        <Button
                          id='cta-transferir'
                          label='Call to Action'
                          hidden={false}
                          text="Transferir"
                          disabled
                          className={`${Styles.customCTA} ${Styles.secondCTA}`}
                          onClick={() => { }}
                        />
                      <CoinsDropdown tokens={allTokens} token={coins} onClick={handleCoins} />
                        

                            
                         
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <div className={Styles.tokenHistory}>
                    <h1 className={Styles.tokenHistory__title}>
                      Histórico de transações
                    </h1>
                    <div className={Styles.tokenHistory__body}>
                      {/* <TokenList tokens={coins} show={} />   */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>

    </div>

  )
}

export default TokenInfo