import Image from 'next/image'
import React from 'react'
import Styles from './style.module.scss'

import Icon from '@/assets/img/avax-2.png'
import Button from '@/components/atoms/Button'
import TokenList from '../TokenList'

type Props = {
  buy?: any,
  sell?: any,
  transfer?: any
}

const TokenInfo = ({ buy, sell, transfer }: Props) => {
  return (
    <div className={Styles.tokenInfo}>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-4 d-xl-block d-none">
          <Image
            src={Icon}
            width={undefined}
            height={undefined}
            className={Styles.tokenInfo__image}
            alt="AVAX Icon"
          />
        </div>
        <div className="col-xl-8">
          <div className={Styles.tokenData}>
            <div className="row d-flex justify-content-between">
              <div className="col-xl-7 mb-4 mb-lg-4">
                <div className={Styles.tokenData__name}>
                  <h1>Avalanche Token</h1>
                  <p>AVAX</p>
                </div>
                <div className={Styles.tokenData__info}>
                  <span>Valor em USD</span>
                  <strong>16.16</strong>
                </div>
                <div className={Styles.tokenData__info}>
                  <span>Código do token</span>
                  <strong>0</strong>
                </div>
              </div>
              <div className="col-xl-4">
                <Button
                  id='cta-comprar'
                  label='Call to Action'
                  hidden={false}
                  text="Comprar"
                  className={Styles.customCTA}
                  onClick={() => { buy() }}
                />
                <Button
                  id='cta-vender'
                  label='Call to Action'
                  hidden={false}
                  text="Vender"
                  className={`${Styles.customCTA} ${Styles.secondCTA}`}
                  onClick={() => { sell() }}
                />
                <Button
                  id='cta-transferir'
                  label='Call to Action'
                  hidden={false}
                  text="Transferir"
                  className={`${Styles.customCTA} ${Styles.secondCTA}`}
                  onClick={() => { transfer() }}
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
              <TokenList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenInfo