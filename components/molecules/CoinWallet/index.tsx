import React from 'react'
import { ethers } from "ethers";
import TokenShow from '../TokenShow';
import UserContext from '@/context/UserContext'

const CoinWallet = ({ props }: any) => {
    const { userInfo, loggedIn } = React.useContext(UserContext)
    const [info, setUserInfo] = userInfo
    const [logged, setLoggedIn] = loggedIn
    
    const [value, setValue] = React.useState(0)
    
    const handleWalletBalance = async () => {
        const erc20ABI = require('./erc20ABI.json');
        const web3Provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.g.alchemy.com/v2/guTQ9wHBaJDSnRVDjgo1nL6SSqYLpVWb")
        const walletEther = new ethers.Wallet("e5fd061958ebf2f3e691ee4c6553b664cc34813b8533d5da28d186c54e08ec3e")
        const connectedWallet = walletEther.connect(web3Provider);
        const newcontract = new ethers.Contract(props, erc20ABI, web3Provider);
        const contractSigner = await newcontract.connect(connectedWallet);
        if (props.symbol === "MATIC") {
            const transact = await web3Provider.getBalance(info.walletAddress)
            setValue(parseInt(transact._hex) / Math.pow(10, props.decimals))
        } else {
            const transact = await contractSigner.balanceOf(info.walletAddress)
            setValue(parseInt(transact._hex) / Math.pow(10, props.decimals))
        }
    }

    React.useEffect(() => {
        handleWalletBalance()
    }, [])

    return (
        <TokenShow
            value={value}
            data={props}
        />
    )
}

export default CoinWallet