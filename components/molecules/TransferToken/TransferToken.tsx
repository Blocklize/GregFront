import React from 'react'
import TokenCheck from "../TokenCheck/TokenCheck";
import Styles from './styles.module.scss'
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import Button from '@/components/atoms/Button';
export default function TransferToken({ tokens, dollarCot, value }: any) {
    const [number, setNumber] = React.useState(0)
    const [percentage, setPercentage] = React.useState(0)
    const tokenValue = dollarCot * value[1].price + 0.20
    React.useEffect(() => {
        if (number < 399) {
            setPercentage(4)
        } else if (number < 399) {
            setPercentage(3)
        }
    })
    const handleChange3 = (event: any) => {

        setNumber(event.target.value)

    };

    return (
        <div className={Styles.container}>
            <div className={Styles.tokenData}>

                <TokenCheck tokens={tokens} dollarCot={dollarCot} value={value} />
            </div>
            <div className={Styles.transferContainer}>
                <h1>TRANSFERIR TOKEN</h1>
                <p>
                    Digite o endereço público(0x..), ou ENS:
                </p>
                <div className={Styles.inputGroup}>
                    <div className={Styles.inputGroup__input}>
                        <input
                            id='brl'
                            autoComplete='off'
                            type="text"
                            
                            
                        />

                    </div>

                </div>
                <p>
                    Digite a quantidade:
                </p>
                <div className={Styles.inputGroup}>
                    <div className={Styles.inputGroup__input}>
                        <input
                            id='brl'
                            autoComplete='off'
                            type="number"
                            max={500}
                            onChange={handleChange3}
                        />
                        <span>{tokens.contract_ticker_symbol}</span>

                    </div>

                </div>
                <div className={Styles.inputGroup__summary}>
                    <div className={Styles.inputGroup__item}>
                        <span>Valor em BRL:</span>
                        <p style={{ color: 'whitesmoke', marginBottom: 0 }}>
                            {number > 0 ? <p> {(tokenValue * number).toFixed(5)} BRL </p> : 0}

                        </p>
                    </div>
                    <div className={Styles.inputGroup__item}>
                        <span>Taxa de processamento</span>
                        <p style={{ color: 'whitesmoke', marginBottom: 0 }}>
                            {number > 0 ? (number * (Number(`0.0${percentage}`))).toFixed(2) : 0} BRL
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

                <div className={Styles.buttons}>
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

                        }}
                    />
                </div>
            </div>
        </div>
    )
};
