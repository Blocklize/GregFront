import React from 'react'
import Styles from './styles.module.scss'
import Content from './content.json'

import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import Image from 'next/image'

import { PersonAddOutline, CubeOutline, SyncOutline, PhonePortrait, CashOutline, WalletOutline } from 'react-ionicons'

import LoginImage from '@/assets/img/form_login.png'
import WalletImage from '@/assets/img/form_wallet.png'
import CheckoutImage from '@/assets/img/form_checkout.png'
import RampImage from '@/assets/img/form_ramp.png'
import TransactionImage from '@/assets/img/form_transaction.png'
import CustomizeImage from '@/assets/img/form_customize.png'

const FeaturesAccordion = () => {
  const images = [
    LoginImage,
    WalletImage,
    CheckoutImage,
    RampImage,
    TransactionImage,
    CustomizeImage
  ]

  const [option, setOption] = React.useState(0)

  return (
    <section className={Styles.featuresAccordion}>
      <div className="container">
        <div className={Styles.featuresAccordion__content}>
          <Title
            id='featuresAccordion-title'
            className={Styles.featuresAccordion__title}
            text={Content.title}
            size={48}
            width={100}
            height={1}
          />
          <Paragraph
            id='featuresAccordion-desc'
            className={Styles.featuresAccordion__desc}
            text={Content.description}
            size={16}
            width={60}
            height={1}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={`${Styles.accordion} row`}>
              <div className="col-lg-6 d-flex justify-content-center">
                <Image
                  src={images[option]}
                  width={485}
                  height={undefined}
                  alt="Picture"
                  className={Styles.accordion__image}
                />
              </div>
              <div className="col-lg-6">
                <div
                  id="accordion"
                  className={`${Styles.accordion__wrapper} accordion`}>
                  <div className={`${Styles.accordion__item} accordion-item`}>
                    <h2 className={`${Styles.accordion__clicker} accordion-header`}>
                      <button
                        onClick={() => setOption(0)}
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#item-1"
                        aria-expanded="true"
                        aria-controls="item-1">
                        <PersonAddOutline
                          color="#C9C9C9"
                        />
                        <span className="ms-3">Inscrição e Login com o E-mail</span>
                      </button>
                    </h2>
                    <div
                      id="item-1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordion">
                      <div className={`${Styles.accordion__body} accordion-body`}>
                        Praticidade de fazer login e se cadastrar apenas com um endereço de e-mail.
                      </div>
                    </div>
                  </div>
                  <div className={`${Styles.accordion__item} accordion-item`}>
                    <h2 className={`${Styles.accordion__clicker} accordion-header`}>
                      <button
                        onClick={() => setOption(1)}
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#item-2"
                        aria-expanded="false"
                        aria-controls="item-2">
                        <CubeOutline
                          color="#C9C9C9"
                        />
                        <span className="ms-3">Gestão dos ativos (Cripto e NFT)</span>
                      </button>
                    </h2>
                    <div
                      id="item-2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion">
                      <div className={`${Styles.accordion__body} accordion-body`}>
                        Fluxos intuitivos e simplificados para a gestão de ativos, criptomoedas, tokens e NFTs.
                      </div>
                    </div>
                  </div>
                  <div className={`${Styles.accordion__item} accordion-item`}>
                    <h2 className={`${Styles.accordion__clicker} accordion-header`}>
                      <button
                        onClick={() => setOption(2)}
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#item-3"
                        aria-expanded="false"
                        aria-controls="item-3">
                        <SyncOutline
                          color="#C9C9C9"
                        />
                        <span className="ms-3">Swap</span>
                      </button>
                    </h2>
                    <div
                      id="item-3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion">
                      <div className={`${Styles.accordion__body} accordion-body`}>
                        Compre criptomoedas e tokens facilmente, com mais conveniência e agilidade.
                      </div>
                    </div>
                  </div>
                  <div className={`${Styles.accordion__item} accordion-item`}>
                    <h2 className={`${Styles.accordion__clicker} accordion-header`}>
                      <button
                        onClick={() => setOption(3)}
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#item-4"
                        aria-expanded="false"
                        aria-controls="item-4">
                        <PhonePortrait
                          color="#C9C9C9"
                        />
                        <span className="ms-3">Fiat On-ramp</span>
                      </button>
                    </h2>
                    <div
                      id="item-4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion">
                      <div className={`${Styles.accordion__body} accordion-body`}>
                        Com o Fiat on-ramp, a conversão de Real para criptomoedas nunca foi tão fácil e acessível, permitindo transações rápidas e seguras através do PIX.
                      </div>
                    </div>
                  </div>
                  <div className={`${Styles.accordion__item} accordion-item`}>
                    <h2 className={`${Styles.accordion__clicker} accordion-header`}>
                      <button
                        onClick={() => setOption(4)}
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#item-5"
                        aria-expanded="false"
                        aria-controls="item-5">
                        <CashOutline
                          color="#C9C9C9"
                        />
                        <span className="ms-3">Transação</span>
                      </button>
                    </h2>
                    <div
                      id="item-5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion">
                      <div className={`${Styles.accordion__body} accordion-body`}>
                        Processo de transação intuitivo e eficiente.
                      </div>
                    </div>
                  </div>
                  <div className={`${Styles.accordion__item} accordion-item`}>
                    <h2 className={`${Styles.accordion__clicker} accordion-header`}>
                      <button
                        onClick={() => setOption(5)}
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#item-6"
                        aria-expanded="false"
                        aria-controls="item-6">
                        <WalletOutline
                          color="#C9C9C9"
                        />
                        <span className="ms-3">Customização da carteira</span>
                      </button>
                    </h2>
                    <div
                      id="item-6"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion">
                      <div className={`${Styles.accordion__body} accordion-body`}>
                        Customize sua carteira, personalize de acordo com a identidade da sua marca.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesAccordion