import { Variants, motion } from "framer-motion";
import Styles from './styles.module.scss'
import { useState } from "react";
import Image from "next/image";


import ETHIcon from '@/assets/img/eth.png'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import BNBIcon from '@/assets/img/BNB-Icon.svg'
import DownArrow from '@/assets/img/down-arrow.svg'
import UpArrow from '@/assets/img/up-arrow.svg'

type Props = {
    text: string,
    onClick: any
}
export default function Dropdown({ text, onClick }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    function handleToggle(t: string) {
        onClick(t)
    }
    const variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };
    return (
        <motion.div
            onClick={() => setIsOpen(!isOpen)}
            animate={isOpen ? { height: 50 } : { height: 400 }}
            className={Styles.dropdown}

        >
            <div className={Styles.header}>

                <p style={{ fontSize: 14 }}>
                    {text}
                </p>
                { isOpen ? <Image src={UpArrow} width={20} height={20} alt="Arrow up icon" /> : <Image src={DownArrow} width={20} height={20} alt="Arrow down icon" /> }
               
            </div>
            <motion.div className={Styles.dropdown__items}>

                <motion.ul animate={isOpen ? { opacity: 0 } : { opacity: 1 }}>
                    <motion.li>
                        <div className={Styles.dropdown__item}>
                        <Image src={ETHIcon} width={30} height={30} alt="ETH Icon" />
                        <button onClick={() => {
                            handleToggle('ETH')
                        }}>
                            <p>
                            Ethereum Main Net
                            </p>
                        </button>

                        </div>
                    </motion.li>
                    <motion.li>
                        <div className={Styles.dropdown__item}>
                        <Image src={MaticIcon} width={30} height={30} alt="ETH Icon" />
                        <button onClick={() => {
                            handleToggle('PLG')
                        }}>
                            <p>
                            Polygon Main Net
                            </p>
                        </button>

                        </div>
                    </motion.li>
                    <motion.li>
                        <div className={Styles.dropdown__item}>
                        <Image src={BNBIcon} width={30} height={30} alt="ETH Icon" />
                        <button onClick={() => {
                            handleToggle('BNB')
                        }}>
                            <p>
                            BNB Chain
                            </p>
                        </button>

                        </div>
                    </motion.li>
                   
                </motion.ul>
            </motion.div>
        </motion.div>
    )
}