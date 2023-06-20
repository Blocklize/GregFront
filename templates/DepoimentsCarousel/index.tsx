import Depoiment from '@/components/molecules/Depoiment'
import Carousel from '@/components/organisms/Carousel'
import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import React from 'react'

import content from './content.json'
import Styles from './styles.module.scss'
import { useRouter } from 'next/router'

// languages
import en from '../../public/locales/en/common.json'
import pt from '../../public/locales/pt/common.json'

const DepoimentsCarousel = () => {
  const router = useRouter();

  const { locale } = router;

  const t = locale === 'en' ? en : pt
  return (
    <div className="container">
      <div className={Styles.depoimentsCarousel}>
        <div className={Styles.depoimentsCarousel__content}>
          <Title
            id='depoimentsCarousel-title'
            className={Styles.depoimentsCarousel__title}
            text={t.testimonials}
            size={48}
            width={100}
            height={1}
          />
          <Paragraph
            id='depoimentsCarousel-desc'
            className={Styles.depoimentsCarousel__desc}
            text=''
            size={16}
            width={60}
            height={1}
          />
        </div>
        <Carousel>
          {
            content &&
            content.map((card, index: number) => (
              <>
              <Depoiment
                key={index}
                content={card}
                description={t.cardTestimonials[index]}
                role={index === 2 ? t.role : ''} 
              />
              </>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default DepoimentsCarousel