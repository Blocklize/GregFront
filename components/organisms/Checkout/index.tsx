import React from 'react'
import Styles from './styles.module.scss'
import Icon from '@/assets/img/avax-2.png'
import Image from 'next/image'
import Button from '@/components/atoms/Button'

const Checkout = () => {
  return (
    <div className={Styles.checkout}>
      <div className="row">
        <div className="col-lg-5">
          <div className={Styles.checkout__tokenInfo}>
            <Image
              src={Icon}
              width={200}
              height={200}
              alt="AVAX Icon"
            />
            <h1>Avalanche Token</h1>
            <p>(AVAX)</p>
            <div className={Styles.tokenData}>
              <span>Valor em USD</span>
              <strong>16.16</strong>
            </div>
            <div className={Styles.tokenData}>
              <span>Código do token</span>
              <strong>0</strong>
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
                  defaultValue={0}
                />
              </div>
            </div>
            <div className={Styles.inputGroup}>
              <label htmlFor="avax" className={Styles.inputGroup__label}>
                Você receberá
              </label>
              <div className={Styles.inputGroup__input}>
                <span>AVAX</span>
                <input
                  id='avax'
                  type="number"
                  defaultValue={0}
                />
              </div>
            </div>
            <div className={`${Styles.inputGroup} mt-4`}>
              <label className={Styles.inputGroup__label}>
                Sumário
              </label>
              <div className={Styles.inputGroup__summary}>
                <div className={Styles.inputGroup__item}>
                  <span>Taxa de processamento</span>
                  <input
                    type="number"
                    defaultValue={0}
                    readOnly
                  />
                </div>
                <div className={Styles.inputGroup__item}>
                  <span>Taxa de gás da rede</span>
                  <input
                    type="number"
                    defaultValue={0}
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
                onClick={() => { console.log('click') }}
              />
              <Button
                id='cta-cancelar'
                label='Call to Action'
                hidden={false}
                text="Cancelar"
                className={`${Styles.customCTA} ${Styles.secondCTA}`}
                onClick={() => {  }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout