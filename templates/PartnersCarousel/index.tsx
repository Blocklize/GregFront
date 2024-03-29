import React from 'react'
import Styles from './styles.module.scss'
import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import Carousel from '@/components/organisms/Carousel'
import content from './content.json'
import PartnerCard from '@/components/molecules/PartnerCard'
import { useRouter } from 'next/router'

// languages
import en from '../../public/locales/en/common.json'
import pt from '../../public/locales/pt/common.json'

const PartnersCarousel = () => {
  const router = useRouter();

  const { locale } = router;

  const t = locale === 'en' ? en : pt
  return (
    <div className='container'>
      <div className={Styles.partnersCarousel}>
        <div className={Styles.partnersCarousel__content}>
          <Title
            id='partnersCarousel-title'
            className={Styles.partnersCarousel__title}
            text={t.plugProjects}
            size={48}
            width={100}
            height={1}
          />
          <Paragraph
            id='partnersCarousel-desc'
            className={Styles.partnersCarousel__desc}
            text=''
            size={16}
            width={60}
            height={1}
          />
        </div>
        <Carousel>
          {content &&
            content.map((card, index: number) => (
              <PartnerCard
                key={index}
                image={card.image}
                title={card.title}
                desc={t.cardProjects[index]}
              />
            ))}
        </Carousel>
      </div>
    </div>
  )
}

export default PartnersCarousel