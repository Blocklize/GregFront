import React from 'react'
import Content from './content.json'
import Styles from './styles.module.scss'

import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import Button from '@/components/atoms/Button'
import Image from 'next/image'

import { CopyBlock, sunburst } from "react-code-blocks";

import JSX from '@/assets/img/logo-javascript.svg'
import REACT from '@/assets/img/logo-react.svg'
import APPLE from '@/assets/img/logo-apple.svg'

const CodeCascade = () => {
  const handleHeaderCtaClick = () => {
    console.log("Click")
  }

  const code =
    `   import Web3 from 'web3';
   import { Magic } from 'magic-sdk';
   const magic = new Magic('YOUR_API_KEY',  {
     network: 'goerli',
   });
   const web3 = new Web3(magic.rpcProvider);
   web3.eth.getAccounts();
  `

  return (
    <section className={Styles.codeCascade}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className={Styles.secondaryShade} />
          <div className="col-lg-5">
            <Title
              id='codeCascade-title'
              className={Styles.codeCascade__title}
              text={Content.title}
              size={48}
              width={16}
              height={1}
            />
            <Paragraph
              id='codeCascade-desc'
              className={Styles.codeCascade__desc}
              text={Content.description}
              size={16}
              width={42}
              height={1}
            />
            <div className={Styles.codeCascade__list}>
              <ul className={Styles.stepByStepList}>
                <li className={Styles.stepByStepList__item}>
                  Some list item descripted here
                </li>
                <li className={`${Styles.stepByStepList__item} ${Styles.highlighted}`}>
                  Some list item descripted here
                </li>
                <li className={Styles.stepByStepList__item}>
                  Some list item descripted here
                </li>
              </ul>
            </div>
            <Button
              id='cta'
              label='Call to Action'
              hidden={false}
              text="Call to Action"
              className={Styles.secondCTA}
              onClick={() => { handleHeaderCtaClick() }}
            />
          </div>
          <div className="col-lg-6">
            <div className={Styles.codeField}>
              <div className={Styles.codeSnippet}>
                <div className={Styles.codeSnippet__header}>
                  <Image
                    src={JSX}
                    width={30}
                    height={undefined}
                    alt="Picture"
                    className='mx-2'
                  />
                  <Image
                    src={REACT}
                    width={35}
                    height={undefined}
                    alt="Picture"
                    className={`${Styles.inactive} mx-2`}
                  />
                  <Image
                    src={APPLE}
                    width={28}
                    height={undefined}
                    alt="Picture"
                    className={`${Styles.inactive} mx-2`}
                  />
                </div>
                <div className={Styles.codeSnippet__body}>
                  <CopyBlock
                    text={code}
                    language={'jsx'}
                    showLineNumbers={true}
                    wrapLines
                    codeBlock
                    theme={sunburst}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeCascade