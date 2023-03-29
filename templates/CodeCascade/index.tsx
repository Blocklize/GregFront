import React from 'react'
import Content from './content.json'
import Styles from './styles.module.scss'

import Title from '@/components/atoms/Title'
import Paragraph from '@/components/atoms/Paragraph'
import Button from '@/components/atoms/Button'
import Image from 'next/image'

import { CopyBlock, xt256 } from "react-code-blocks";

import JSX from '@/assets/img/logo-javascript.svg'
import REACT from '@/assets/img/logo-react.svg'
import APPLE from '@/assets/img/logo-apple.svg'

const CodeCascade = () => {
  const handleHeaderCtaClick = () => {
    window.open(Content.call_to_action.url)
  }

  const code =
    `   const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": email })
    }
    fetch('https://greg.blocklize.io/auth/requestLogin', config);
    .then((response) => {
      return response.ok ? "Email sent" : "Try again";
    })
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
                  {Content.list.item_1}
                </li>
                <li className={`${Styles.stepByStepList__item} ${Styles.highlighted}`}>
                  {Content.list.item_2}
                </li>
                <li className={Styles.stepByStepList__item}>
                  {Content.list.item_3}
                </li>
              </ul>
            </div>
            <Button
              id='cta'
              label='Call to Action'
              hidden={false}
              text={Content.call_to_action.text}
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
                    theme={xt256}
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