import React from 'react'
import Styles from './styles.module.scss'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { EvmChain } from '@moralisweb3/common-evm-utils'

import DownArrow from '@/assets/img/down-arrow.svg'
import UpArrow from '@/assets/img/up-arrow.svg'
import ETHIcon from '@/assets/img/eth.png'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import BNBIcon from '@/assets/img/BNB-Icon.svg'

export default function ChainsDropdown({ onClick }: any) {
    const [isOpen, setIsOpen] = React.useState<boolean>(true)
    const [text, setText] = React.useState('Polygon')
    return (
        <motion.div
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? { height: 50, borderRadius: 50 } : { height: 207, borderRadius: 20 } }
        className={Styles.dropdown}

      >
        <div className={Styles.header}>

          <p className={Styles.dropdown__chain}>
            {text}
          </p>
          {isOpen ? <Image src={DownArrow} width={14} height={14} alt="Arrow up icon" /> : <Image src={UpArrow} width={21} height={21} alt="Arrow down icon" />}

        </div>
        <motion.div className={Styles.dropdown__items} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>

          <motion.ul animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
            <motion.li>
            <button onClick={() => {
                  onClick('eth-mainnet', EvmChain.ETHEREUM)
                  // setChain('eth-mainnet')
                   setText('Ether ')
                  // setEvm(EvmChain.ETHEREUM)
                }}>
              <motion.div className={Styles.dropdown__item} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
                <div>

                <Image src={ETHIcon} width={20} height={20} alt="ETH Icon" />
                </div>
              
                  <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                  <p>
                    Ether
                  </p>

                  </div>
       
              </motion.div>
                </button>

            </motion.li>
            <motion.li>
            <button onClick={() => {
                  onClick('matic-mainnet', EvmChain.POLYGON)
                  // setChain('eth-mainnet')
                   setText('Polygon')
                  // setEvm(EvmChain.ETHEREUM)
                }}>
              <motion.div className={Styles.dropdown__item} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
                <div>

                <Image src={MaticIcon} width={20} height={20} alt="Polygon Icon" />
                </div>
              
                  <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                  <p>
                    Polygon
                  </p>

                  </div>
       
              </motion.div>
                </button>

            </motion.li>
            <motion.li>
            <button onClick={() => {
                  onClick('bsc-mainnet', EvmChain.BSC)
                  // setChain('eth-mainnet')
                   setText('BSC ')
                  // setEvm(EvmChain.ETHEREUM)
                }}>
              <motion.div className={Styles.dropdown__item} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
                <div>

                <Image src={BNBIcon} width={20} height={20} alt="BNB Icon" />
                </div>
              
                  <div style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                  <p>
                    BSC
                  </p>

                  </div>
       
              </motion.div>
                </button>

            </motion.li>
          

          </motion.ul>
        </motion.div>
      </motion.div>
    )
};
