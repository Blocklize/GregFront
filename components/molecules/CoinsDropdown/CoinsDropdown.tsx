import React from 'react'
import Styles from './styles.module.scss'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { EvmChain } from '@moralisweb3/common-evm-utils'

import DownArrow from '@/assets/img/down-arrow2.svg'
import UpArrow from '@/assets/img/up-arrow2.svg'
import EthIcon from '@/assets/img/eth.png'
import BSCIcon from '@/assets/img/BNB-Icon.svg'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import AvaxIcon from '@/assets/img/avax.png'
import CompIcon from '@/assets/img/comp.png'
import AaveIcon from '@/assets/img/aave.png'
import CrvIcon from '@/assets/img/crv.png'
import DaiIcon from '@/assets/img/dai.png'
import BNBIcon from '@/assets/img/BNB-Icon.svg'

export default function CoinsDropdown({ tokens, token, onClick }: any) {

  function chainIcon(data: any) {
    switch (data) {
      case "ETH": return EthIcon
      case "MATIC": return MaticIcon
      case "BNB": return BSCIcon
      case "AVAX": return AvaxIcon
      case "COMP": return CompIcon
      case "AAVE": return AaveIcon
      case "CRV": return CrvIcon
      case "DAI": return DaiIcon

    }
  }
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const [text, setText] = React.useState(`${token.contract_name}`)
  
  return (
   <div>
      <motion.div
      onClick={() => setIsOpen(!isOpen)}
      animate={isOpen ? { height: 44 } : { height: '250px' }}
      className={Styles.dropdown}
      style={{ margin: 0 }}
    >
      <div className={Styles.header}>

        <p style={{ fontSize: 14, paddingTop: 13, color: '#ffffffe8' }}>
          {text}
        </p>
        {isOpen ? <Image src={DownArrow} width={18} height={18} alt="Arrow up icon" /> : <Image src={UpArrow} width={25} height={25} alt="Arrow down icon" />}

      </div>
      <motion.div className={Styles.dropdown__items} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>

        <motion.ul animate={isOpen ?
          { opacity: 0, pointerEvents: 'none' } :
          { opacity: 1, pointerEvents: 'auto' }
        }
        >
          {tokens.map((token: any) => {
            return (

              <motion.li>
                <motion.div className={Styles.dropdown__item} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
                  <Image src={chainIcon(token.contract_ticker_symbol)} width={30} height={30} alt="ETH Icon" />
                  <button onClick={() => {
                    onClick(token)
                    // setChain('eth-mainnet')
                     setText(token.contract_name)
                    // setEvm(EvmChain.ETHEREUM)
                  }}>
                    <p>
                      {token.contract_name}
                    </p>
                  </button>

                </motion.div>
              </motion.li>
            )
          })}


        </motion.ul>
      </motion.div>
    </motion.div>
   </div>
   
  )
};
