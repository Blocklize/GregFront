import Image from 'next/image'
import React from 'react'
import Styles from './style.module.scss'

//Tokens icons
import EthIcon from '@/assets/img/eth.png'
import BSCIcon from '@/assets/img/BNB-Icon.svg'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import AvaxIcon from '@/assets/img/avax-2.png'
import CompIcon from '@/assets/img/comp.png'
import AaveIcon from '@/assets/img/aave.png'
import CrvIcon from '@/assets/img/crv.png'
import DaiIcon from '@/assets/img/dai.png'

import Button from '@/components/atoms/Button'
import TokenList from '../TokenList'
import { CaretUp, CaretDown } from '@phosphor-icons/react'
import Checkout from '../Checkout'

type Props = {
  tokens: any

}

const TokenInfo = ({ tokens }: Props) => {
 
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
  const hoje = new Date();

  // Obter o mês anterior
  const mesAnterior = hoje.getMonth() - 1;

  // Criar uma nova data com o mês anterior
  const outroDia = new Date(hoje.getFullYear(), mesAnterior, hoje.getDate());

  // Formatar a data de hoje no formato YYYY-MM-DD
  const dataHoje = hoje.toISOString().slice(0, 10);

  // Formatar a data no outro dia no formato YYYY-MM-DD
  const dataOutroDia = outroDia.toISOString().slice(0, 10);

  
  const API_KEY = "cqt_rQDFycmjQqmCmxHw46TqrcHW4rBQ"; // apiKey
  const EthMainnet = "eth-mainnet"
  const BscMainnet= "bsc-mainnet"
  const TICKET = "USD";
  const EthAddress = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
  const ADDRESS = tokenAddress(tokens.contract_ticker_symbol)
  const [buy, setBuy] = React.useState(false)
  const [dollarCot, setDollarCot] = React.useState(0)
  const url = "https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/" + EthMainnet + "/" + TICKET + "/" + ADDRESS + "/?from=" + dataHoje + "&to=" + dataOutroDia + "&key=" + API_KEY;
  const urlBsc = "https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/" + BscMainnet + "/" + TICKET + "/" + EthAddress + "/?from=" + dataHoje + "&to=" + dataOutroDia + "&key=" + API_KEY;
  const [value, setValue] = React.useState(tokens)
  React.useEffect(() => {
    if (tokens.contract_ticker_symbol == 'ETH') {

      fetch(urlBsc)
        .then((resp) => resp.json())
        .then((data) => {
          setValue(data.data[0].items)
         
        })
      
    } else {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setValue(data.data[0].items)
        
        })
        
    }

  }, [])
  React.useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then((resp) => resp.json())
    .then((data => {
      setDollarCot(data.USDBRL.bid)
      
    }))
  }, [])

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

  return (
    <div>
      {buy ?
       <Checkout tokens={tokens} value={value} dollarCot={dollarCot} /> :
        
       <div className={Styles.tokenInfo}>
      
       <div className="row d-flex justify-content-center">
         <div className="col-xl-4 d-xl-block d-none">
           <Image
             src={chainIcon(tokens.contract_ticker_symbol)}
             width={500}
             height={500}
             className={Styles.tokenInfo__image}
             alt={`${tokens.contract_ticker_symbol} Icon`}
           />
         </div>
         <div className="col-xl-8">
           <div className={Styles.tokenData}>
             <div className="row d-flex justify-content-between">
               <div className="col-xl-7 mb-4 mb-lg-4">
                 <div className={Styles.tokenData__name}>
                   <h1>{value[1]?.contract_metadata.contract_name}</h1>
                   <p>{tokens.contract_ticker_symbol}</p>
                 </div>
                 <div className={Styles.tokenData__info}>
                   <span>Valor em USD</span>
                   <strong>
                     {value[1]?.price > value[2]?.price ?
                     <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                        <p style={{ color: '#48cf69', marginBottom: 0 }}>
                         {value[1]?.price}
                       </p>
                       <CaretUp size={20} color="#48cf69" weight="fill" />
                     </div> :
                       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7  }}>
                       <p style={{ color: '#F04A4A', marginBottom: 0 }}>
                        {value[1]?.price}
                      </p>
                      <CaretDown size={20} color="#F04A4A" weight="fill" />
                    </div>}
                   </strong>
                 </div>
                 <div className={Styles.tokenData__info}>
                   <span>Código do token</span>
                   <strong>{formatteAddress(tokens.contract_ticker_symbol)}</strong>
                 </div>
               </div>
               <div className="col-xl-4">
                 <Button
                   id='cta-comprar'
                   label='Call to Action'
                   hidden={false}
                   text="Comprar"
                   className={Styles.customCTA}
                   onClick={(() => {
                     setBuy(true)
                   })}
                 />
                 <Button
                   id='cta-vender'
                   label='Call to Action'
                   hidden={false}
                   text="Em breve"
                   disabled
                   className={`${Styles.customCTA} ${Styles.secondCTA}`}
                   onClick={() => {  }}
                 />
                 <Button
                   id='cta-transferir'
                   label='Call to Action'
                   hidden={false}
                   text="Em breve"
                   disabled
                   className={`${Styles.customCTA} ${Styles.secondCTA}`}
                   onClick={() => { }}
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="row mt-4">
         <div className="col-12">
           <div className={Styles.tokenHistory}>
             <h1 className={Styles.tokenHistory__title}>
               Histórico de transações
             </h1>
             <div className={Styles.tokenHistory__body}>
               {/* <TokenList tokens={tokens} show={} />   */}
             </div>
           </div>
         </div>
       </div>
     </div> }
  
    </div>
    
  )
}

export default TokenInfo