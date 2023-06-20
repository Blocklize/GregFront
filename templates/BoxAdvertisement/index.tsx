import React from 'react'
import Content from './content.json'
import Styles from './styles.module.scss'

import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import Button from '@/components/atoms/Button'
import Image from 'next/image'

import Illustration from '@/assets/img/phone-illustration.png'

const BoxAdvertisement = () => {
  const handleHeaderCtaClick = () => {
    console.log("Click")
  }

  return (
    <section className={Styles.boxAdvertisement}>
      <div className="container">
        <div className={Styles.boxAdvertisement__content}>
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-lg-6">
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
                className="my-4"
                text={Content.description}
                size={16}
                width={100}
                height={1}
              />
              <Button
                id='cta'
                label='Call to Action'
                hidden={false}
                text="Call to Action"
                className={Styles.secondCTA}
                onClick={() => { handleHeaderCtaClick() }}
              />
            </div>
            <div className="col-lg-6 d-lg-block">
              <Image
                src={Illustration}
                height={undefined}
                width={500}
                alt="Picture"
                className={Styles.picture}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoxAdvertisement