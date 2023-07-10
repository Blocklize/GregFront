import React from 'react'
import Styles from './styles.module.scss'
import Button from '@/components/atoms/Button'

import PaymentSection from '@/components/molecules/PaymentSection/PaymentSection'
import TokenCheck from '@/components/molecules/TokenCheck/TokenCheck'

type Props = {
  tokens: any
  value: any
  dollarCot: number
  setStep: any

}

export default function Checkout({ tokens, setStep, value, dollarCot }: Props) {
  const [pay, setPay] = React.useState<boolean>()
  const [number, setNumber] = React.useState(0)
  const [percentage, setPercentage] = React.useState(0)
  const [payment, setPayment] = React.useState(false)

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

  const tokenValue = dollarCot * value[1].price + 0.20
  const receivedValue = (number - 0.25) / tokenValue - (((number - 0.25) / tokenValue * Number(`0.0${percentage}`)))


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
    <div>
      {pay ? <PaymentSection /> :
        <div className={Styles.checkout}>
          {payment ?
            <div>
              <div className={Styles.checkout__container}>
                <div className={Styles.tokenContainer}>
                  <div>
                    <TokenCheck tokens={tokens} dollarCot={dollarCot} value={value} />
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <div style={{ padding: 20, textAlign: 'left', width: '100%' }}>
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
                            setPay(true)

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
                <TokenCheck tokens={tokens} dollarCot={dollarCot} value={value} />
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
      }

    </div>
  )
}


