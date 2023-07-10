import React from 'react'
import Styles from './styles.module.scss'
import { motion } from 'framer-motion'
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


import Picture from '@/assets/img/avatar.png'
import WalletIcon from '@/assets/img/wallet-outline.png'
import UnderlinedMenu from '@/components/molecules/UnderlinedMenu/UnderlinedMenu'
import ChainsDropdown from '@/components/molecules/ChainsDropdown/ChainsDropdown'
import PaymentSection from '@/components/molecules/PaymentSection/PaymentSection'
import SellCheckout from '@/components/organisms/SellCheckout/SellCheckout'
import TransferToken from '@/components/molecules/TransferToken/TransferToken'

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

const MATIC = {
  contract_ticker_symbol: 'MATIC',
  contract_address: '0x85f138bfEE4ef8e540890CFb48F620571d67Eda3',
  contract_name: 'Matic Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}

const AVAX = {
  contract_ticker_symbol: 'AVAX',
  contract_address: '0x85f138bfEE4ef8e540890CFb48F620571d67Eda3',
  contract_name: 'AVAX Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const COMP = {
  contract_ticker_symbol: 'COMP',
  contract_address: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  contract_name: 'COMP Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const AAVE = {
  contract_ticker_symbol: 'AAVE',
  contract_address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
  contract_name: 'AAVE Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const CRV = {
  contract_ticker_symbol: 'CRV',
  contract_address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
  contract_name: 'CRV Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const DAI = {
  contract_ticker_symbol: 'DAI',
  contract_address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  contract_name: 'DAI Token',
  balance: 0.0000,
  balance_24h: 0,
  logo_url: 'abuaba',
  quote_rate: 2,
  quote_rate_24h: 2,
}
const ProfileHero = () => {

  const router = useRouter()

  const { userInfo, loggedIn } = React.useContext(UserContext)
  const [info, setUserInfo] = userInfo
  const [logged, setLoggedIn] = loggedIn
  const [step, setStep] = React.useState(0)
  const [word, setWord] = React.useState<boolean>(false)
  const [chain, setChain] = React.useState('matic-mainnet')
  const [evm, setEvm] = React.useState(EvmChain.POLYGON)
  const [text, setText] = React.useState('Polygon Main Net')
  const [tokens, setTokens] = React.useState<TokensProps>([]);
  const [loading, setLoading] = React.useState(false);
  const [nfts, setNfts] = React.useState<EvmNft[]>();
  const [coins, setCoins] = React.useState()
  const [selected, setSelected] = React.useState('TOKENS');
  const [buy, setBuy] = React.useState<boolean>()
  const [sell, setSell] = React.useState<boolean>()
  const [transfer, setTransfer] = React.useState<boolean>()
  const address = info?.walletAddress
  React.useEffect(() => {

    async function getWalletBalance() {
      if (address) {
        const url = `https://api.covalenthq.com/v1/${chain}/address/${await info?.walletAddress}/balances_v2/?&key=cqt_rQDFycmjQqmCmxHw46TqrcHW4rBQ`
        setLoading(true)
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            setTokens(json.data?.items)
           
            setCoins(json.data?.items[0])
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

  const allTokens = [DAI, CRV, AAVE, COMP, AVAX, ...tokens]
  const filteredTokens = allTokens.filter((token, index, self) => {
    const foundIndex = self.findIndex((t) => t.contract_ticker_symbol === token.contract_ticker_symbol);
    return foundIndex === index;
  });
  const [props, setProps] = React.useState(tokens)
  const [value, setValue] = React.useState(props)
  const [dollarCot, setDollarCot] = React.useState<number>()

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
  }, [evm])



  const handleUsername = () => {
    if (info) {
      return info.email.split("@")[0]
    }
  }
  function toggleChain(chain: string, evm: any) {
    setChain(chain)
    setEvm(evm)
  }

  React.useEffect(() => {
    if (!logged) {
      router.push('/login')
    }
  }, [])
  React.useEffect(() => {

  }, [props])

  if (logged) {
    return (
      <div className={Styles.profileHero}>
        {screen.width > 992 && <div onClick={(() => {
          setWord(word == true ? !word : word);
        })}>

          <UnderlinedMenu selected={selected} setSelected={setSelected} />
        </div>}

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
                </div>
                <div className={Styles.profileInfo__data}>
                  <div>
                    <span>
                      <strong>Wallet: </strong>
                      <input type="text" readOnly value={info?.walletAddress || "Error, try refresh the page"} />
                    </span>
                  </div>
                </div>
                <Button
                  id='cta'
                  label='Comprar'
                  text='Comprar'
                  hidden={false}
                  onClick={() => { setStep(1) }}
                  className={`${Styles.profileAlternative} fw-bold w-100 mb-2`}
                />
                <Button
                  id='cta'
                  label='Vender'
                  text='Vender'

                  hidden={false}
                  onClick={() => { setStep(1); setSell(false) }}
                  className={`${Styles.profileAlternative} fw-bold w-100 mb-2`}
                />
                <Button
                  id='cta'
                  label='Transferir'
                  text='Transferir'
                  hidden={false}

                  onClick={() => { setTransfer(false); setStep(1) }}
                  className={`${Styles.profileAlternative} fw-bold w-100 mb-2`}
                />
              </div>
            </div>

            <div className="col-lg-8">
              {screen.width < 992 && <motion.div style={step >= 2 ? { opacity: 0 } : { opacity: 1 }} animate onClick={(() => {
                setWord(word == true ? !word : word);
              })}>

                <UnderlinedMenu selected={selected} setSelected={setSelected} />
              </motion.div>}
              <div className={Styles.wallet}>

                <div className={Styles.wallet__header}>
                  <div className={Styles.wallet__dropdown}>
                    <ChainsDropdown onClick={toggleChain} />

                    <div>
                      {step == 0 && <Search />}
                      {step == 1 && <Button
                        hidden={false}
                        id='backToTokens'
                        label='Clique para voltar aos tokens'
                        onClick={() => { setStep(0) }}
                        text='Clique para voltar aos tokens'
                        className={Styles.alternative}
                      />}
                      {step == 2 && <Button
                        hidden={false}
                        id='backToTokens'
                        label='Clique para voltar a seção de compra'
                        onClick={() => { setStep(1); setBuy(false); setSell(false); setTransfer(false) }}
                        text='Clique para voltar a seção de compra'
                        className={Styles.alternative2}
                      />}
                      {step == 4 && <Button
                        hidden={false}
                        id='backToTokens'
                        label='Clique para voltar a seção de compra'
                        onClick={() => { setStep(2) }}
                        text='Clique para voltar a seção de compra'
                        className={Styles.alternative2}
                      />}



                    </div>
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

                  <div className={Styles.wallet__body} style={step == 0 ? { overflowY: 'hidden' } : { overflowY: 'scroll' }}>

                    {selected == 'TOKENS' ?
                      <div>

                        {step == 0 && <TokenList tokens={filteredTokens as TokensProps} props={props} coins={coins} setCoins={setCoins} setProps={setProps} setStep={setStep} />}
                        {step == 1 && <TokenInfo setTransfer={setTransfer} tokens={props} setCoins={setCoins} coins={coins} allTokens={allTokens} setStep={setStep} value={value} setValue={setValue} dollarCot={dollarCot} setDollarCot={setDollarCot} buy={buy} setBuy={setBuy} sell={sell} setSell={setSell} />}
                        {buy && <Checkout tokens={coins} value={value} dollarCot={dollarCot as number} setStep={setStep} />}
                        {sell && <SellCheckout tokens={coins} value={value} dollarCot={dollarCot as number} setStep={setStep} setSell={setSell} />}
                        {transfer && <TransferToken tokens={coins} value={value} dollarCot={dollarCot as number} />}
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