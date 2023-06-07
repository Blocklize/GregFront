import React from 'react'
import Styles from './styles.module.scss'
import { motion, LayoutGroup, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Moralis from "moralis";
import { EvmChain, EvmNft } from "@moralisweb3/common-evm-utils";

import Button from '@/components/atoms/Button'
import Search from '@/components/atoms/Search'
import TokenList from '@/components/organisms/TokenList'
import TokenInfo from '@/components/organisms/TokenInfo'
import Checkout from '@/components/organisms/Checkout'
import UserContext from '@/context/UserContext'
import NFTList from '@/components/organisms/NFTList/NFTList'

import MonkeyNFT from '@/assets/img/nft_monkey_test.png'
import Picture from '@/assets/img/avatar.png'
import WalletIcon from '@/assets/img/wallet-outline.png'
import ETHIcon from '@/assets/img/eth.png'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import BNBIcon from '@/assets/img/BNB-Icon.svg'
import DownArrow from '@/assets/img/down-arrow.svg'
import UpArrow from '@/assets/img/up-arrow.svg'

type TokensProps = {
  contract_address: string,
  balance_24h: string
  contract_decimals: number
  contract_name: string
  contract_ticker_symbol: string
  pretty_quote: string
  pretty_quote_24h: string
  quote: number
  quote_24h: number
  quote_rate: number
  quote_rate_24h: number
}[]


const ProfileHero = () => {
  const router = useRouter()
  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn
  const [step, setStep] = React.useState(0)
  const menuItems = ['TOKENS', 'NFT'];
  const [word, setWord] = React.useState<boolean>(false)
  const [isOpen, setIsOpen] = React.useState<boolean>(true)
  const [selected, setSelected] = React.useState(0);
  const [chain, setChain] = React.useState('matic-mainnet')
  const [evm, setEvm] = React.useState(EvmChain.POLYGON)
  const [text, setText] = React.useState('Polygon Main Net')
  const [tokens, setTokens] = React.useState<TokensProps>([]);
  const [loading, setLoading] = React.useState(false);
  const [nfts, setNfts] = React.useState<EvmNft[]>();
  const [button, setButton] = React.useState(false)
  const [show, setShow] = React.useState(false)
  const address = info?.walletAddress
  
  React.useEffect(() => {
     
      async function getWalletBalance() {
        if(address) {
          
          const url = `https://api.covalenthq.com/v1/${chain}/address/${await info?.walletAddress}/balances_v2/?&key=cqt_rQDFycmjQqmCmxHw46TqrcHW4rBQ`
          setLoading(true)
          fetch(url)
            .then((res) => res.json())
            .then((json) => {
              setTokens(json.data?.items)
            })
            .catch((error) => {
              throw error
            })
            .finally(() => {
              setTimeout(() => {
                setLoading(false)
              }, 3000);
            })
        }
      }
      getWalletBalance()
   
  }, [chain]);
  React.useEffect(() => {

    async function runApp() {
      const address = await info?.walletAddress
      const chain = evm
      if (address) {
        const responseNFT = await Moralis.EvmApi.nft.getWalletNFTs({
          address: address,
          chain: chain,
        });
        setNfts(responseNFT.result)
      }
    };
    runApp()
  }, [text])


  const onClickHandler = () => {
    setStep(step + 1)
  }

  const handleUsername = () => {
    if (info) {
      return info.email.split("@")[0]
    }
  }
function onclick() {
  setButton(!button)
  setShow(!show)
}


  React.useEffect(() => {
    if (!logged) {
      router.push('/login')
    }
  }, [])

  const MenuItem = ({ text, selected, onClick }: any) => (

    <motion.div
      className={Styles.underlined_menu__menu_item}
      onClick={onClick}
      animate={{ opacity: selected ? 1 : .5 }}
      style={{ pointerEvents: selected ? 'none' : 'auto' }}
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

  if (logged) {
    return (
      <div className={Styles.profileHero}>
        <div className={Styles.underlined_menu}>
          <div className={Styles.underlined_menu__wrapper}>
            <LayoutGroup>
              {menuItems.map((el, i) => (
                <MenuItem
                  text={el}
                  key={el}
                  selected={selected === i}
                  onClick={() => { setSelected(i); setWord(!word) }}
                />
              ))}
            </LayoutGroup>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3">
              <div className={Styles.profileInfo}>
                <div className={Styles.profileInfo__picture}>
                  <Image
                    width={130}
                    height={130}
                    src={Picture}
                    alt="Picture"
                    className={Styles.rounded}
                  />
                </div>
                <div className={Styles.profileInfo__user}>
                  <h1>{handleUsername()}</h1>
                  <p>
                    <strong>ID</strong>
                    <span>MISSING_INFO</span>
                  </p>
                </div>
                <div className={Styles.profileInfo__data}>
                  <div>
                    <span>
                      <strong>Main wallet: </strong>
                      <input type="text" readOnly value={info?.walletAddress || "Error, try refresh the page"} />
                    </span>
                  </div>
                </div>
                <Button
                  id='cta'
                  label='Comprar'
                  text='Comprar'
                  hidden={false}
                  onClick={() => { console.log("Click") }}
                  className={`${Styles.alternative} fw-bold w-100 mb-2`}
                />
                <Button
                  id='cta'
                  label='Vender'
                  text='Vender'
                  hidden={false}
                  onClick={() => { console.log("Click") }}
                  className={`${Styles.alternative} fw-bold w-100 mb-2`}
                />
                <Button
                  id='cta'
                  label='Transferir'
                  text='Transferir'
                  hidden={false}
                  onClick={() => { console.log("Click") }}
                  className={`${Styles.alternative} fw-bold w-100 mb-2`}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className={Styles.wallet}>
                <div className={Styles.wallet__header}>
                  <div className={Styles.wallet__dropdown}>
                    {button ? (
                      <Button
                        hidden={false}
                        id='backToTokens'
                        label='CLique para voltar aos tokens'
                        onClick={() => { onclick() }}
                        text='Voltar para tokens'
                        className={Styles.alternative}
                      />
                    ) : <Search />}
                   
                    <motion.div
                      onClick={() => setIsOpen(!isOpen)}
                      animate={isOpen ? { height: 50 } : { height: 207 }}
                      className={Styles.dropdown}

                    >
                      <div className={Styles.header}>

                        <p style={{ fontSize: 14, paddingTop: 13 }}>
                          {text}
                        </p>
                        {isOpen ? <Image src={DownArrow} width={18} height={18} alt="Arrow up icon" /> : <Image src={UpArrow} width={25} height={25} alt="Arrow down icon" />}

                      </div>
                      <motion.div className={Styles.dropdown__items} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>

                        <motion.ul animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
                          <motion.li>
                            <motion.div className={Styles.dropdown__item} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
                              <Image src={ETHIcon} width={30} height={30} alt="ETH Icon" />
                              <button onClick={() => {
                                setChain('eth-mainnet')
                                setText('Ethereum Main Net')
                                setEvm(EvmChain.ETHEREUM)
                              }}>
                                <p>
                                  Ethereum Main Net
                                </p>
                              </button>

                            </motion.div>
                          </motion.li>
                          <motion.li>
                            <motion.div className={Styles.dropdown__item} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
                              <Image src={MaticIcon} width={30} height={30} alt="ETH Icon" />
                              <button onClick={() => {
                                setChain('matic-mainnet')
                                setText('Matic Main Net')
                                setEvm(EvmChain.POLYGON)
                              }}>
                                <p>
                                  Polygon Main Net
                                </p>
                              </button>

                            </motion.div>
                          </motion.li>
                          <motion.li>
                            <motion.div className={Styles.dropdown__item} animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}>
                              <Image src={BNBIcon} width={30} height={30} alt="ETH Icon" />
                              <button onClick={() => {
                                setChain('bsc-mainnet')
                                setText('BSC Main Net')
                                setEvm(EvmChain.BSC)
                              }}>
                                <p>
                                  BNB Chain
                                </p>
                              </button>

                            </motion.div>
                          </motion.li>

                        </motion.ul>
                      </motion.div>
                    </motion.div>


                  </div>

                  <div className={Styles.balance}>
                    <h1 className={Styles.balance__value}>
                      BRL
                      <span>0,00</span>
                      <Image
                        width={25}
                        height={undefined}
                        src={WalletIcon}
                        alt="Wallet Icon"
                      />
                    </h1>
                  </div>
                </div>
                <div className={Styles.wallet__body}>
                  <div className={Styles.wallet__body}>
                    {/* <Checkout /> */}

                    
                      {!word ?
                        <div onClick={(() => {
                          setButton(true)
                        })}>
  
                          <TokenList tokens={tokens as TokensProps} onClick={onclick} show={show}/>  
                      
                        </div> :
                        <NFTList result={nfts as EvmNft[]} />}
                    </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={Styles.loadScreen}>
        <div className={Styles.loadScreen__loader} />
      </div>
    )
  }
}

export default ProfileHero