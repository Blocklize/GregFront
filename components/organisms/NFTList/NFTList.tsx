import { motion } from "framer-motion";
import Styles from './styles.module.scss'
import MonkeyNFT from '@/assets/img/nft_monkey_test.png'
import Image from "next/image";

export default function NFTList() {
    return (
        <motion.div className={Styles.wallet__nfts} whileInView={{ opacity: 1 }}>
            <ul>
                <li>
                    <div className={Styles.wallet__nft}>
                        <div className={Styles.wallet__info}>

                            <p className={Styles.wallet__id}>
                                #42135534634
                            </p>
                            <p className={Styles.wallet__title} >
                                Lorem ipsum dolor
                            </p>
                            <p className={Styles.wallet__collection} >
                                NFT Collection name
                            </p>
                        </div>
                        <div className={Styles.wallet__icon}>
                            <Image src={MonkeyNFT} width={280} height={280} alt='NFT Icon' />
                        </div>
                    </div>
                </li>
                <li>
                    <div className={Styles.wallet__nft}>
                        <div className={Styles.wallet__info}>

                            <p className={Styles.wallet__id}>
                                #42135534634
                            </p>
                            <p className={Styles.wallet__title} >
                                Lorem ipsum dolor
                            </p>
                            <p className={Styles.wallet__collection} >
                                NFT Collection name
                            </p>
                        </div>
                        <div className={Styles.wallet__icon}>
                            <Image src={MonkeyNFT} width={280} height={280} alt='NFT Icon' />
                        </div>
                    </div>
                </li>
                <li>
                    <div className={Styles.wallet__nft}>
                        <div className={Styles.wallet__info}>

                            <p className={Styles.wallet__id}>
                                #42135534634
                            </p>
                            <p className={Styles.wallet__title} >
                                Lorem ipsum dolor
                            </p>
                            <p className={Styles.wallet__collection} >
                                NFT Collection name
                            </p>
                        </div>
                        <div className={Styles.wallet__icon}>
                            <Image src={MonkeyNFT} width={280} height={280} alt='NFT Icon' />
                        </div>
                    </div>
                </li>
                <li>
                    <div className={Styles.wallet__nft}>
                        <div className={Styles.wallet__info}>

                            <p className={Styles.wallet__id}>
                                #42135534634
                            </p>
                            <p className={Styles.wallet__title} >
                                Lorem ipsum dolor
                            </p>
                            <p className={Styles.wallet__collection} >
                                NFT Collection name
                            </p>
                        </div>
                        <div className={Styles.wallet__icon}>
                            <Image src={MonkeyNFT} width={280} height={280} alt='NFT Icon' />
                        </div>
                    </div>
                </li>
                <li>
                    <div className={Styles.wallet__nft}>
                        <div className={Styles.wallet__info}>

                            <p className={Styles.wallet__id}>
                                #42135534634
                            </p>
                            <p className={Styles.wallet__title} >
                                Lorem ipsum dolor
                            </p>
                            <p className={Styles.wallet__collection} >
                                NFT Collection name
                            </p>
                        </div>
                        <div className={Styles.wallet__icon}>
                            <Image src={MonkeyNFT} width={280} height={280} alt='NFT Icon' />
                        </div>
                    </div>
                </li>
                <li>
                    <div className={Styles.wallet__nft}>
                        <div className={Styles.wallet__info}>

                            <p className={Styles.wallet__id}>
                                #42135534634
                            </p>
                            <p className={Styles.wallet__title} >
                                Lorem ipsum dolor
                            </p>
                            <p className={Styles.wallet__collection} >
                                NFT Collection name
                            </p>
                        </div>
                        <div className={Styles.wallet__icon}>
                            <Image src={MonkeyNFT} width={280} height={280} alt='NFT Icon' />
                        </div>
                    </div>
                </li>

            </ul>
        </motion.div>
    )
}