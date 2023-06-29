import Title from '@/components/atoms/Title'
import Styles from './styles.module.scss'
import Image from 'next/image'
import falseQrCode from '@/assets/img/falseQRCode.svg'
import { Check, ClipboardText } from '@phosphor-icons/react'
import React from 'react'
import Paragraph from '@/components/atoms/Paragraph'
export default function PaymentSection() {
    const [copied, setCopied] = React.useState(false);
    function copyToClipboard() {
        navigator.clipboard.writeText('0020101021226990014BR.GOV.BR')
      .then(() => setCopied(true))
      .then(() => {
        setTimeout(() => {
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        })
      })
    }
    return (
        <div className={Styles.container}>
            <Title 
             text={'Escaneie o QR Code'}
             className={Styles.container__qrTitle}
            />
            <div className={Styles.container__QRCode}>
             <Image
              src={falseQrCode} 
              width={200}
              height={200}
              alt='QR Code Falso'
            />
            </div>
            <Paragraph text={'Ou, copie a chave:'} />
              
           
            <div className={Styles.inputContainer}>
                <div className={Styles.input}>
                    <div className={Styles.input__text}>

                    <p>

                0020101021226990014BR.GOV.BR
                    </p>
                    </div>
                   

                    {copied ? 
                    <div>
                        <ClipboardText width={35} height={35} color='green' onClick={copyToClipboard}/>
                         <Check size={20} color="green"  />
                    </div> : 
                    <ClipboardText width={35} height={35} color='white' onClick={copyToClipboard}/> }
                   
                    
                </div>
              
            </div>
        </div>
    )
};
