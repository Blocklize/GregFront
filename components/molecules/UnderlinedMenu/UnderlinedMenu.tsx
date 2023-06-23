import React from 'react'
import Styles from './styles.module.scss'

import { LayoutGroup, motion } from "framer-motion"


export default function UnderlinedMenu() {

    const menuItems = ['TOKENS', 'NFT'];
    const [selected, setSelected] = React.useState(0);

    const MenuItem = ({ text, selected, onClick }: any) => (

        <motion.div
          className={Styles.underlined_menu__menu_item}
          onClick={onClick}
          animate={{ opacity: selected ? 1 : .5 }}
          
        
        >
          <p>
            {text}
          </p>
          {selected && (
            <motion.div
              className={Styles.underlined_menu__underline}
              layoutId={Styles.underlined_menu__underline}
            />
          )}
        </motion.div>
      )
    return (
        <div className={Styles.underlined_menu}>
        <div className={Styles.underlined_menu__wrapper}>
          <LayoutGroup>
            {menuItems.map((el, i) => (
              <MenuItem
                text={el}
                key={el}
                selected={selected === i}
                onClick={() => { setSelected(i); }}
                style={{ pointerEvents: selected ? 'auto' : 'none',  }}
              />
            ))}
          </LayoutGroup>
        </div>
      </div>
    )
}