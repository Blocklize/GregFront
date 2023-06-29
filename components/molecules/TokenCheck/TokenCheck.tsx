import Image from 'next/image'
import Styles from './styles.module.scss'
import EthIcon from '@/assets/img/eth.png'
import BSCIcon from '@/assets/img/BNB-Icon.svg'
import MaticIcon from '@/assets/img/polygon-matic-icon.svg'
import AvaxIcon from '@/assets/img/avalanche-avax-icon.svg'
import CompIcon from '@/assets/img/comp.png'
import AaveIcon from '@/assets/img/aave.png'
import CrvIcon from '@/assets/img/crv.png'
import DaiIcon from '@/assets/img/dai.png'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import React from 'react'
import Button from '@/components/atoms/Button'

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
function formatteAddress(data: any) {
    switch (data) {
        case "ETH": return "0x2170ed08..."
        case "MATIC": return "0x7D1AfA7B..."
        case "BNB": return "0xB8c77482..."
        case "AVAX": return "0x85f138bf..."
        case "COMP": return "0xc00e94Cb..."
        case "AAVE": return "0x7Fc66500..."
        case "CRV": return "0xD533a949..."
        case "DAI": return "0x6B175474..."
    }
}


export default function TokenCheck({ tokens, value, dollarCot }: any) {
    const tokenValue = dollarCot * value[1].price + 0.20
    return (
        <div className={Styles.checkout__tokenInfo}>
            <Image
                src={chainIcon(tokens.contract_ticker_symbol)}
                width={200}
                height={200}
                alt={`${tokens.contract_ticker_symbol} Icon`}
            />
            <h1>{tokens.contract_name}</h1>
            <p>({tokens.contract_ticker_symbol})</p>
            <div className={Styles.tokenData}>
                <span>BRL</span>
                <strong>
                    {(value[1]?.price) * dollarCot > (value[2]?.price) * dollarCot ?
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                            <p style={{ color: '#48cf69', marginBottom: 0 }}>
                                {tokenValue.toFixed(5)}
                            </p>
                            <CaretUp size={20} color="#48cf69" weight="fill" />
                        </div> :
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 7 }}>
                            <p style={{ color: '#F04A4A', marginBottom: 0 }}>
                                {tokenValue.toFixed(5)}
                            </p>
                            <CaretDown size={20} color="#F04A4A" weight="fill" />
                        </div>}
                </strong>
            </div>
            <div className={Styles.tokenData}>
                <span>Código do token</span>
                <strong>{formatteAddress(tokens.contract_ticker_symbol)}</strong>
            </div>
        </div>
    )
};
