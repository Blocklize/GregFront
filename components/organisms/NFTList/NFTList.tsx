import { motion } from "framer-motion";
import Styles from './styles.module.scss'
import MonkeyNFT from '@/assets/img/nft_monkey_test.png'
import Image from "next/image";
import React from "react";
import UserContext from "@/context/UserContext";



export default function NFTList({ result }: any) {

    return (
        <motion.div className={Styles.wallet__nfts} whileInView={{ opacity: 1 }}>
            <ul>
                {result?.map((nft: any) => {
                    return (
                        <li key={nft._data.tokenHash}>
                            <div className={Styles.wallet__nft}>
                                <div className={Styles.wallet__info}>

                                    <p className={Styles.wallet__id}>
                                        #{nft._data.tokenId}
                                    </p>
                                    <p className={Styles.wallet__title} >
                                        {nft._data.metadata.name}
                                    </p>
                                    <p className={Styles.wallet__collection} >
                                        {nft._data.name}
                                    </p>
                                </div>
                                <div className={Styles.wallet__icon}>
                                    <div style={{ position: 'absolute', width: 240, height: 230, borderRadius: 12 }}>
                                        <Image  src={`https://ipfs.io/${nft._data.metadata.image.replace('ipfs://', 'ipfs/')}`} fill alt='NFT Icon' style={{ borderRadius: 12 }} />
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </motion.div>)
}