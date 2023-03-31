import React, { ReactNode } from 'react'
import Styles from './styles.module.scss'

import Chevron from '@/assets/img/chevron-forward-outline.png'
import Image from 'next/image'

type Props = {
  children?: ReactNode
}

const Carousel = ({ children }: Props) => {
  // Refs
  const carousel = React.useRef<any>(null)

  // Left arrow click function handler
  const handleLeftClick = (e: any) => {
    const distance: number = carousel.current.offsetWidth;
    e.preventDefault()
    carousel.current.scrollLeft -= distance + 16
  }

  // Right arrow click function handler
  const handleRightClick = (e: any) => {
    const distance: number = carousel.current.offsetWidth;
    e.preventDefault()
    carousel.current.scrollLeft += distance + 16
  }

  return (
    <div className={Styles.carousel}>
      <div className={Styles.carousel__body} ref={carousel}>
        {children}
      </div>
      <div className={Styles.carousel__buttons}>
        <button onClick={(e) => { handleLeftClick(e) }}>
          <Image
            width={10}
            height={undefined}
            alt="Chevron"
            src={Chevron}
            className={Styles.invert}
          />
        </button>
        <button
          onClick={(e) => { handleRightClick(e) }}
          className="ms-2"
        >
          <Image
            width={10}
            height={undefined}
            alt="Chevron"
            src={Chevron}
          />
        </button>
      </div>
    </div>
  )
}

export default Carousel