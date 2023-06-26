import React from 'react'
import Styles from './styles.module.scss'

import { LayoutGroup, motion } from "framer-motion"

type Props = {
  selected: any
  setSelected: any
}
export default function UnderlinedMenu({ selected, setSelected }: Props) {

  



  return (
    <div className={Styles.underlined_menu}>
      <div className={Styles.underlined_menu__wrapper}>
        <LayoutGroup>
         
          <motion.div
            className={Styles.underlined_menu__menu_item}

          >
            <div onClick={(() => {
              { selected == 'TOKENS' ? setSelected(selected) : setSelected('TOKENS') }

            })} className={Styles.underlined_menu__word} style={selected == 'TOKENS' ? { pointerEvents: 'none' } : { pointerEvents: 'all', cursor: 'pointer' }}>

              <p style={selected == 'TOKENS' ? { opacity: 1 } : { opacity: .5 }}>
                TOKENS
              </p>
              {selected == 'TOKENS' && (
                <motion.div
                  className={Styles.underlined_menu__underline}

                  layoutId={Styles.underlined_menu__underline}
                />
              )}
            </div>
            <div onClick={(() => {
              { selected == 'NFT' ? setSelected(selected) : setSelected('NFT') }
            })} style={selected == 'NFT' ? { pointerEvents: 'none' } : { pointerEvents: 'all', cursor: 'pointer' }}>

              <p style={selected == 'NFT' ? { opacity: 1 } : { opacity: .5 }}>
                NFT
              </p>
              {selected == 'NFT' && (
                <motion.div
                  className={Styles.underlined_menu__underline}
                  layoutId={Styles.underlined_menu__underline}
                />
              )}
            </div>
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  )
}