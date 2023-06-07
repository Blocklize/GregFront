import React from 'react'
import Styles from './styles.module.scss'
import Icon from '@/assets/img/avax-2.png'
import Image from 'next/image'
import Button from '@/components/atoms/Button'

import EthIcon from '@/assets/img/eth.png'
import BSCIcon from '@/assets/img/BNB-Icon.svg'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import AvaxIcon from '@/assets/img/avax-2.png'
import CompIcon from '@/assets/img/comp.png'
import AaveIcon from '@/assets/img/aave.png'
import CrvIcon from '@/assets/img/crv.png'
import DaiIcon from '@/assets/img/dai.png'

import { CaretUp, CaretDown } from '@phosphor-icons/react'

type Props = {
  tokens: any
  value: any
  dollarCot: number
}

export default function Checkout({ tokens, value, dollarCot }: Props) {
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
  const [cpf, setCpf] = React.useState<number>();
  const handleChange = (event: any) => {
    const { value } = event.target;

    // Remove todos os caracteres não numéricos
    const formattedCpf = value.replace(/\D/g, '');

    // Insere os pontos e o traço no CPF
    const formattedValue = formattedCpf.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );

    setCpf(formattedValue);
  };


  React.useEffect(() => {
    if (number < 399) {
      setPercentage(4)
    } else if (number < 399) {
      setPercentage(3)
    }
  })
  function convertToken() {
    const dollar = parseFloat(number.toString()) / dollarCot
    const tokenValue = dollar / value[1].price
    if (number == 0) {
      return 0
    }
    if (number < 400) {

      return tokenValue * 0.04
    } else if (number > 399) {

      return tokenValue * 0.03

    }
    return tokenValue
  }

  function formatarCPF(cpf: any) {
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Insere os pontos e o traço no CPF
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpf;
  }
  console.log(formatarCPF('09727608906'))

  return (

    <div className={Styles.checkout}>
      {payment ?
        <div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
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
                  <span>Valor em USD</span>
                  <strong>
                    {value[1]?.price > value[2]?.price ?
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                        <p style={{ color: '#48cf69', marginBottom: 0 }}>
                          {value[1]?.price}
                        </p>
                        <CaretUp size={20} color="#48cf69" weight="fill" />
                      </div> :
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                        <p style={{ color: '#F04A4A', marginBottom: 0 }}>
                          {value[1]?.price}
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
            <div>
              <div style={{ padding: 40, textAlign: 'center', width: 500 }}>
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
                        style={{ textAlign: 'center' }}
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
                        style={{ textAlign: 'center' }}
                      />
                    </div>
                    <label htmlFor="brl" className={Styles.inputGroup__label} style={{ paddingTop: 10 }}>
                      Digite seu CPF:
                    </label>
                    <div className={Styles.inputGroup__input}>
                      <input
                        type="text"
                        value={cpf}
                        onChange={handleChange}

                        style={{ textAlign: 'center' }}
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
                        setPayment(true)
                      }}
                    />
                    <Button
                      id='cta-cancelar'
                      label='Call to Action'
                      hidden={false}
                      text="Cancelar"
                      className={`${Styles.customCTA} ${Styles.secondCTA}`}
                      onClick={() => { }}
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
                <span>Valor em USD</span>
                <strong>
                  {value[1]?.price > value[2]?.price ?
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                      <p style={{ color: '#48cf69', marginBottom: 0 }}>
                        {value[1]?.price}
                      </p>
                      <CaretUp size={20} color="#48cf69" weight="fill" />
                    </div> :
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                      <p style={{ color: '#F04A4A', marginBottom: 0 }}>
                        {value[1]?.price}
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
                  <p>{convertToken()}</p>
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
                      {percentage}%
                    </p>
                  </div>
                  <div className={Styles.inputGroup__item}>
                    <span>Taxa de gás da rede</span>
                    <input
                      type="text"
                      defaultValue={0.25}
                      readOnly
                    />
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
                  onClick={() => { }}
                />
              </div>
            </form>
          </div>
        </div>}

    </div>
  )
}
