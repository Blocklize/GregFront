import Depoiment from '@/components/molecules/Depoiment'
import Carousel from '@/components/organisms/Carousel'
import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import React from 'react'

import content from './content.json'
import Styles from './styles.module.scss'

const DepoimentsCarousel = () => {
  return (
    <div className="container">
      <div className={Styles.depoimentsCarousel}>
        <div className={Styles.depoimentsCarousel__content}>
          <Title
            id='depoimentsCarousel-title'
            className={Styles.depoimentsCarousel__title}
            text='Depoimentos de parceiros'
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
              <Depoiment
                key={index}
                content={card}
              />
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default DepoimentsCarousel