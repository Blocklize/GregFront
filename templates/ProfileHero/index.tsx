import React from 'react'
import Styles from './styles.module.scss'
import { motion, LayoutGroup, Variants } from 'framer-motion'
import { useRouter } from 'next/router'
import Image from 'next/image'



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
  const [chain, setChain] = React.useState('eth-mainnet')
  const [text, setText] = React.useState('Ethereum Main Net')
  
  const variants = {
    open: {
    opacity: 1,
  y: 0,
  transition: {type: "spring", stiffness: 300, damping: 24 }
},
  closed: {opacity: 0, y: 20, transition: {duration: 0.2 } }
};

  const onClickHandler = () => {
    setStep(step + 1)
  }

  const handleUsername = () => {
    if (info) {
      return info.email.split("@")[0]
    }
  }

const handleToggle = (t: string) => {

      switch (t) {
        case "ETH": return 'Ethereum Main Net'
        case "PLG": return 'Polygon Main Net'
      }
 
  
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
                    <Search />
                    <motion.div
                      onClick={() => setIsOpen(!isOpen)}
                      animate={isOpen ? { height: 50 } : { height: 400 }}
                      className={Styles.dropdown}

                    >
                      <div className={Styles.header}>

                        <p style={{ fontSize: 14, paddingTop: 13 }}>
                          {text}
                        </p>
                        {isOpen ? <Image src={UpArrow} width={20} height={20} alt="Arrow up icon" /> : <Image src={DownArrow} width={14} height={14} alt="Arrow down icon" />}

                      </div>
                      <motion.div className={Styles.dropdown__items}>

                        <motion.ul animate={isOpen ? { opacity: 0 } : { opacity: 1 }}>
                          <motion.li>
                            <div className={Styles.dropdown__item}>
                              <Image src={ETHIcon} width={30} height={30} alt="ETH Icon" />
                              <button onClick={() => {
                                setChain('eth-mainnet')
                                setText('Ethereum Main Net')
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
                                setChain('matic-mainnet')
                                setText('Matic Main Net')
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
                                setChain('bsc-mainnet')
                                setText('BSC Main Net')
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
                    {!word ?
                      <div>

                        {step == 0 && <TokenList onClick={onClickHandler} chain={chain} />}
                        {step == 1 && <TokenInfo buy={onClickHandler} />}
                        {step == 2 && <Checkout />}
                      </div> :
                      <NFTList />}

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