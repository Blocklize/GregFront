import Styles from './styles.module.scss'

import Image from 'next/image'


import React from 'react'
import Button from '@/components/atoms/Button'
import TokenCheck from '@/components/molecules/TokenCheck/TokenCheck'

export default function SellCheckout({ tokens, value, dollarCot, setStep, setSell }: any) {
    const [sellSection, setSellSection] = React.useState<boolean>()
    const [cpf, setCpf] = React.useState()
    
   
    React.useEffect(() => {
        if (number < 399) {
            setPercentage(4)
        } else if (number < 399) {
            setPercentage(3)
        }
    })

    const [number, setNumber] = React.useState(0)
    const [percentage, setPercentage] = React.useState(0)
    const tokenValue = dollarCot * value[1].price + 0.20
  
    const receivedValue = (number - 0.25) *  tokenValue - (tokenValue * Number(`0.0${percentage}`))
    const handleChange3 = (event: any) => {

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
    const [accountChar, setAccountChar] = React.useState('');

    const handleChange = (event: any) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 11) {
            setAccountChar(inputValue);
        }
    };
    return (

        <div className={Styles.checkout__container}>
            <div className={Styles.checkout__tokenContainer}>

            <TokenCheck tokens={tokens} dollarCot={dollarCot} value={value} />
            </div>
            {!sellSection ? <div className={Styles.formContainer}>
                <form className={Styles.checkout__form}>
                    <h1>VENDER TOKEN</h1>
                    <div className={Styles.inputGroup}>
                        <label htmlFor="brl" className={Styles.inputGroup__label}>
                            Digite o seu CPF:
                        </label>
                        <div className={Styles.inputGroup__input}>
                            <span>CPF</span>
                            <input
                                id='brl'
                                autoComplete='off'
                                type="text"
                                onChange={handleChange2}
                                value={cpf}

                            // onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={Styles.subtitle}>

                        <p>
                            CADASTRE UMA CONTA PARA RECEBIMENTO:
                        </p>
                    </div>
                    <div className={Styles.inputGroup}>
                        <label htmlFor="avax" className={Styles.inputGroup__label}>
                            Digite sua agência:
                        </label>
                        <div className={Styles.inputGroup__input}>
                            <input
                                id='brl'
                                autoComplete='off'
                                type="number"
                                value={accountChar}
                                onChange={handleChange}

                            />

                        </div>
                        <label htmlFor="avax" className={Styles.inputGroup__label}>
                            Conta corrente:
                        </label>
                        <div className={Styles.inputGroup__input}>
                            <input
                                id='brl'
                                autoComplete='off'
                                type="number"
                         

                            />

                        </div>
                        <div className={Styles.buttons}>
                            <Button
                                id='cta-comprar'
                                label='Call to Action'
                                hidden={false}
                                text="CONTINUAR"
                                className={`${Styles.customCTA} me-3`}
                                onClick={() => {
                                    setSellSection(true)
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
                                    setSell(false)
                                }}
                            />
                        </div>
                    </div>


                </form>

            </div> :
                <div className={Styles.checkout__formContainer}>
                    <form className={Styles.checkout__alternativeForm}>
                        <h1>VENDER TOKEN</h1>
                        <div className={Styles.inputGroup}>
                            <label htmlFor="brl" className={Styles.inputGroup__label}>
                                Digite o valor que deseja vender
                            </label>
                            <div className={Styles.inputGroup__input}>
                                <span>{tokens.contract_ticker_symbol}</span>
                                <input
                                    id='brl'
                                    autoComplete='off'
                                    type="number"
                                    max={500}
                                    onChange={handleChange3}
                                />
                            </div>
                        </div>
                        <div className={Styles.inputGroup}>
                            <label htmlFor="avax" className={Styles.inputGroup__label}>
                                Você receberá
                            </label>
                            <div className={Styles.inputGroup__input}>
                                <span>BRL</span>
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
                        <div className={Styles.buttonsAlternative}>
                            <Button
                                id='cta-comprar'
                                label='Call to Action'
                                hidden={false}
                                text="CONTINUAR"
                                className={`${Styles.customCTA} me-3`}
                                onClick={() => {
                                   
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

                </div>}



        </div>

    )
};
