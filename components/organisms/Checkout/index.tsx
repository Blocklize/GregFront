import React from 'react'
import Styles from './styles.module.scss'
import Icon from '@/assets/img/avax-2.png'
import Image from 'next/image'
import Button from '@/components/atoms/Button'

import EthIcon from '@/assets/img/eth.png'
import BSCIcon from '@/assets/img/BNB-Icon.svg'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import AvaxIcon from '@/assets/img/avalanche-avax-icon.svg'
import CompIcon from '@/assets/img/comp.png'
import AaveIcon from '@/assets/img/aave.png'
import CrvIcon from '@/assets/img/crv.png'
import DaiIcon from '@/assets/img/dai.png'

import { CaretUp, CaretDown } from '@phosphor-icons/react'
import TokenInfo from '../TokenInfo'

type Props = {
  tokens: any
  value: any
  dollarCot: number
  setStep: any

}

export default function Checkout({ tokens, setStep, value, dollarCot }: Props) {
  
  const [number, setNumber] = React.useState(0)
  const [percentage, setPercentage] = React.useState(0)
  const [payment, setPayment] = React.useState(false)
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
  const [cpf, setCpf] = React.useState<string>();
  const handleChange = (event: any) => {

    setNumber(event.target.value)

  };
  const formatarCPF = (valor: any) => {
    // Remove todos os caracteres não numéricos
    const cpfNumerico = valor.replace(/\D/g, '');

    // Aplica a formatação do CPF (###.###.###-##)
    const cpfFormatado = cpfNumerico.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpfFormatado;
  };
  const handleChange2 = (event: any) => {
    const { value } = event.target;
    const cpfFormatado = formatarCPF(value);
    setCpf(cpfFormatado);
  };


  React.useEffect(() => {
    if (number < 399) {
      setPercentage(4)
    } else if (number < 399) {
      setPercentage(3)
    }
  })
  const [valor, setValor] = React.useState<number>()

  const tokenValue = dollarCot * value[1].price + 0.20
  const tax = (number * Number(`0.0${percentage}`) + 0.25)
  const receivedValue = (number - 0.25)  / tokenValue - (((number - 0.25) / tokenValue * Number(`0.0${percentage}`)))


  const [show, setShow] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (number > 0) {
      setShow(true)
    } else if (number <= 0) {
      setShow(false)
    }
    if (number < 400) {
      setPercentage(4)
    }
    if (number > 399) {
      setPercentage(3)
    }
  })
  

  return (

    <div className={Styles.checkout}>
      {payment ?
        <div>
          <div className={Styles.checkout__container}>
            <div style={{ width: '100%' }}>
            <div>
              <div className={Styles.checkout__tokenInfo}>
                <Image
                  src={chainIcon(tokens.contract_ticker_symbol)}
                  width={200}
                  height={200}
                  alt={`${tokens.contract_ticker_symbol} Icon`}
                />
                <h1>{tokens.contract_name}</h1>
                <p>({tokens.contract_ticker_symbol})</p>
                <div className={Styles.tokenData}>
                  <span>Valor BRL</span>
                  <strong>
                    {(value[1]?.price) * dollarCot > (value[2]?.price) * dollarCot ?
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                        <p style={{ color: '#48cf69', marginBottom: 0 }}>
                        {tokenValue.toFixed(5)}
                        </p>
                        <CaretUp size={20} color="#48cf69" weight="fill" />
                      </div> :
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                        <p style={{ color: '#F04A4A', marginBottom: 0 }}>
                          {tokenValue.toFixed(5)}
                        </p>
                        <CaretDown size={20} color="#F04A4A" weight="fill" />
                      </div>}
                  </strong>
                </div>
                <div className={Styles.tokenData}>
                  <span>Código do token</span>
                  <strong>{formatteAddress(tokens.contract_ticker_symbol)}</strong>
                </div>
              </div>
            </div>
            </div>
            <div>
              <div style={{ padding: 30, textAlign: 'center'}}>
                <form className={Styles.checkout__form}>
                  <h1>COMPRAR TOKEN</h1>
                  <div className={Styles.inputGroup}>
                    <label htmlFor="brl" className={Styles.inputGroup__label}>
                      Digite seu nome:
                    </label>
                    <div className={Styles.inputGroup__input}>
                      <input
                        id='brl'
                        type="text"
                        max={500}
                        onChange={handleChange}
                        style={{ textAlign: 'left' }}
                      />
                    </div>
                    <label htmlFor="email" className={Styles.inputGroup__label} style={{ paddingTop: 10 }}>
                      Digite seu email:
                    </label>
                    <div className={Styles.inputGroup__input}>
                      <input
                        id='brl'
                        type="text"
                        max={500}

                        onChange={handleChange}
                        style={{ textAlign: 'left' }}
                      />
                    </div>
                    <label htmlFor="cpf" className={Styles.inputGroup__label} style={{ paddingTop: 10 }}>
                      Digite seu CPF:
                    </label>
                    <div className={Styles.inputGroup__input}>
                      <input
                        type="text"
                        value={cpf}
                        onChange={handleChange2}
                        style={{ textAlign: 'left' }}
                      />
                    </div>
                  </div>
                  <div className={Styles.inputGroup}>

                  </div>

                  <div className={Styles.buttons}>
                    <Button
                      id='cta-comprar'
                      label='Call to Action'
                      hidden={false}
                      text="CONTINUAR"
                      className={`${Styles.customCTA} me-3`}
                      onClick={() => {
                        setStep(4)
                      }}
                    />
                    <Button
                      label='cancel'
                      id='cta-comprarr'
                      hidden={false}
                      text="Cancelar"
                      className={`${Styles.customCTA} ${Styles.secondCTA}`}
                      onClick={() => { setStep(0) }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> :
        <div className="row">
          <div className="col-lg-5">
            <div className={Styles.checkout__tokenInfo}>
              <Image
                src={chainIcon(tokens.contract_ticker_symbol)}
                width={200}
                height={200}
                alt={`${tokens.contract_ticker_symbol} Icon`}
              />
              <h1>{tokens.contract_name}</h1>
              <p>({tokens.contract_ticker_symbol})</p>
              <div className={Styles.tokenData}>
                <span>Valor BRL</span>
                <strong>
                  {value[1]?.price * dollarCot > value[2]?.price * dollarCot ?
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                      <p style={{ color: '#48cf69', marginBottom: 0 }}>
                        {(value[1]?.price * dollarCot + 0.20).toString().slice(0,10)}
                      </p>
                      <CaretUp size={20} color="#48cf69" weight="fill" />
                    </div> :
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                      <p style={{ color: '#F04A4A', marginBottom: 0 }}>
                        {(value[1]?.price * dollarCot + 0.20).toString().slice(0,10)}
                      </p>
                      <CaretDown size={20} color="#F04A4A" weight="fill" />
                    </div>}
                </strong>
              </div>
              <div className={Styles.tokenData}>
                <span>Código do token</span>
                <strong>{formatteAddress(tokens.contract_ticker_symbol)}</strong>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <form className={Styles.checkout__form}>
              <h1>COMPRAR TOKEN</h1>
              <div className={Styles.inputGroup}>
                <label htmlFor="brl" className={Styles.inputGroup__label}>
                  Digite o valor que deseja comprar
                </label>
                <div className={Styles.inputGroup__input}>
                  <span>BRL</span>
                  <input
                    id='brl'
                    autoComplete='off'
                    type="number"
                    max={500}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={Styles.inputGroup}>
                <label htmlFor="avax" className={Styles.inputGroup__label}>
                  Você receberá
                </label>
                <div className={Styles.inputGroup__input}>
                  <span>{tokens.contract_ticker_symbol}</span>
                  <p>{receivedValue <= 0 ? 0 : receivedValue}</p>
                </div>
              </div>
              <div className={`${Styles.inputGroup} mt-4`}>
                <label className={Styles.inputGroup__label}>
                  Sumário
                </label>
                <div className={Styles.inputGroup__summary}>
                  <div className={Styles.inputGroup__item}>
                    <span>Taxa de processamento</span>
                    <p style={{ color: 'whitesmoke', marginBottom: 0 }}>
                      {number > 0 ? (((number) * Number(`0.0${percentage}`))).toFixed(2) : 0} BRL
                    </p>
                  </div>
                  <div className={Styles.inputGroup__item}>
                    <span>Taxa de gás da rede</span>
                    <p>
                      0.25 BRL 
                    </p>
                  </div>
                  <div className={Styles.inputGroup__item}>
                    <span>Total:</span>
                    <p style={{ color: 'whitesmoke', marginBottom: 0 }}>
                      {number > 0 ? (number * Number(`0.0${percentage}`) + 0.25).toFixed(2) : 0} BRL

                    </p>
                  </div>
                </div>
              </div>
              <div className={Styles.buttons}>
                <Button
                  id='cta-comprar'
                  label='Call to Action'
                  hidden={false}
                  text="CONTINUAR"
                  className={`${Styles.customCTA} me-3`}
                  onClick={() => {
                    setPayment(true)
                  }}
                />
                <Button
                  id='cta-cancelar'
                  label='Call to Action'
                  hidden={false}
                  text="Cancelar"
                  className={`${Styles.customCTA} ${Styles.secondCTA}`}
                  onClick={() => {
                    setStep(0)
                  }}
                />
              </div>
            </form>
          </div>

        </div>}
    </div>
  )
}


