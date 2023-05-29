import React from 'react'
import { ethers } from "ethers";
import TokenShow from '../TokenShow';
import UserContext from '@/context/UserContext'

const CoinWallet = ({ props, onClick }: any) => {
    const { userInfo, loggedIn } = React.useContext(UserContext)
    const [info, setUserInfo] = userInfo
    const [logged, setLoggedIn] = loggedIn    
    return (
        <TokenShow
            data={props}
            onClick={onClick}
        />
    )
}

export default CoinWallet