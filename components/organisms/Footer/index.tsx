import React from 'react'
import Styles from './styles.module.scss'

import Image from 'next/image'
import Logo from '@/assets/img/logo-branco.png'
import Link from 'next/link'

import ImageOne from '@/assets/img/Imagem 1.png'
import ImageTwo from '@/assets/img/Imagem 2.png'
import ImageThree from '@/assets/img/Imagem 3.png'
import ImageFour from '@/assets/img/Imagem 5.png'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className="container">
        <div className={Styles.footer__top}>
          <Image src={Logo} height={undefined} width={120} alt="Logo - Greg" />
          <div className={Styles.socialLinks}>
            <Link href="#" className={Styles.socialLinks__item}>
              <Image src={ImageOne} height={undefined} width={20} alt="Icon" />
            </Link>
            <Link href="#" className={Styles.socialLinks__item}>
              <Image src={ImageTwo} height={undefined} width={20} alt="Icon" />
            </Link>
            <Link href="#" className={Styles.socialLinks__item}>
              <Image src={ImageThree} height={undefined} width={20} alt="Icon" />
            </Link>
            <Link href="#" className={Styles.socialLinks__item}>
              <Image src={ImageFour} height={undefined} width={20} alt="Icon" />
            </Link>
          </div>
        </div>
        <div className={Styles.footer__middle}>
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-lg-2 col-6 mb-5 mb-lg-0">
              <div className={Styles.linkColumn}>
                <h1 className={Styles.linkColumn__title}>
                  Link category
                </h1>
                <ul className={Styles.linkList}>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum dolor
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-5 mb-lg-0">
              <div className={Styles.linkColumn}>
                <h1 className={Styles.linkColumn__title}>
                  Link category
                </h1>
                <ul className={Styles.linkList}>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum dolor
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-5 mb-lg-0">
              <div className={Styles.linkColumn}>
                <h1 className={Styles.linkColumn__title}>
                  Link category
                </h1>
                <ul className={Styles.linkList}>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum dolor
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-5 mb-lg-0">
              <div className={Styles.linkColumn}>
                <h1 className={Styles.linkColumn__title}>
                  Link category
                </h1>
                <ul className={Styles.linkList}>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum dolor
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-5 mb-lg-0">
              <div className={Styles.linkColumn}>
                <h1 className={Styles.linkColumn__title}>
                  Link category
                </h1>
                <ul className={Styles.linkList}>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum dolor
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem ipsum
                    </Link>
                  </li>
                  <li className={Styles.linkList__item}>
                    <Link href="#" className={Styles.standardLink}>
                      Lorem dolor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.footer__separator} />
        <div className={Styles.footer__bottom}>
          <p className={Styles.tinyText}>
            Copyrighted by Greg &copy; 2023
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer