import React from 'react'
import Content from './content.json'
import Styles from './styles.module.scss'

import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import Image from 'next/image'
import Picture from '@/assets/img/Picture.png'
import Isologo from '@/assets/img/simbolo-padrao.png'
import Button from '@/components/atoms/Button'

const StepCascade = () => {
  const handleHeaderCtaClick = () => {
    console.log("Click")
  }

  return (
    <section className={Styles.stepCascade}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className={Styles.secondaryShade} />
          <div className="col-lg-5">
            <Title
              id='stepCascade-title'
              className={Styles.stepCascade__title}
              text={Content.title}
              size={48}
              width={16}
              height={1}
            />
            <Paragraph
              id='stepCascade-desc'
              className={Styles.stepCascade__desc}
              text={Content.description}
              size={16}
              width={42}
              height={1}
            />
            <div className={Styles.stepCascade__list}>
              <ul className={Styles.stepByStepList}>
                <li className={Styles.stepByStepList__item}>
                  Some list item descripted here
                </li>
                <li className={`${Styles.stepByStepList__item} ${Styles.highlighted}`}>
                  Some list item descripted here
                </li>
                <li className={Styles.stepByStepList__item}>
                  Some list item descripted here
                </li>
              </ul>
            </div>
            <Button
              id='cta'
              label='Call to Action'
              hidden={false}
              text="Call to Action"
              className={Styles.secondCTA}
              onClick={() => { handleHeaderCtaClick() }}
            />
          </div>
          <div className="col-lg-6">
            <div className={Styles.walletCard}>
              <Image
                src={Isologo}
                width={80}
                height={undefined}
                alt="Picture"
                className={Styles.walletCard__image}
              />
              <div className={Styles.walletCard__content}>
                <div className={Styles.pictureHolder}>
                  <Image
                    src={Picture}
                    height={100}
                    width={100}
                    alt="Picture"
                    className={Styles.pictureHolder__image}
                  />
                </div>
                <div className={Styles.profileInfo}>
                  <h1 className={Styles.profileInfo__title}>
                    Liu Huang
                  </h1>
                  <p className={Styles.profileInfo__id}>
                    <strong>ID</strong>
                    <span>12345678910</span>
                  </p>
                </div>
              </div>
              <div className={Styles.walletCard__separator} />
            </div>

            <div className={Styles.stepList}>
              <div className={Styles.stepCard}>
                <div className={Styles.stepCard__content}>
                  <Title
                    className={Styles.reducedSize}
                    text={Content.title}
                    size={20}
                    width={100}
                    height={1}
                  />
                  <Paragraph
                    className="mb-0"
                    text={Content.description}
                    size={16}
                    width={100}
                    height={1}
                  />
                </div>
                <div className={Styles.stepCard__separator} />
              </div>
              <div className={Styles.stepCard}>
                <div className={Styles.stepCard__content}>
                  <Title
                    className={Styles.reducedSize}
                    text={Content.title}
                    size={20}
                    width={100}
                    height={1}
                  />
                  <Paragraph
                    className="mb-0"
                    text={Content.description}
                    size={16}
                    width={100}
                    height={1}
                  />
                </div>
                <div className={Styles.stepCard__separator} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepCascade