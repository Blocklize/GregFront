import React from 'react'
import Styles from './styles.module.scss'

import Image from 'next/image'
import Logo from '@/assets/img/logo-branco.png'
import Link from 'next/link'

import ImageOne from '@/assets/img/Imagem 1.png'
import ImageTwo from '@/assets/img/Imagem 2.png'
import ImageThree from '@/assets/img/Imagem 4.png'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-3">
            <div className={Styles.footer__top}>
              <Image src={Logo} height={undefined} width={120} alt="Logo - Greg" />
              <div className={Styles.socialLinks}>
                <Link id='twitter' href="#" className={Styles.socialLinks__item}>
                  <Image src={ImageOne} height={undefined} width={20} alt="Icon" />
                </Link>
                <Link id='instagram' href="#" className={Styles.socialLinks__item}>
                  <Image src={ImageTwo} height={undefined} width={20} alt="Icon" />
                </Link>
                <Link id='linkedin' href="#" className={Styles.socialLinks__item}>
                  <Image src={ImageThree} height={undefined} width={20} alt="Icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={Styles.footer__middle}>
              <div className="row d-flex align-items-start justify-content-between">
                <div className="col-lg-4 col-6 mb-5 mb-lg-0">
                  <div className={Styles.linkColumn}>
                    <h1 className={Styles.linkColumn__title}>
                      Sobre o Greg
                    </h1>
                    <ul className={Styles.linkList}>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                          Quem somos
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="https://blocklize.io/" className={Styles.standardLink}>
                         Blocklize
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                          
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                         
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-6 mb-5 mb-lg-0">
                  <div className={Styles.linkColumn}>
                    <h1 className={Styles.linkColumn__title}>
                      Ajuda
                    </h1>
                    <ul className={Styles.linkList}>
                      <li className={Styles.linkList__item}>
                        <Link href="mailto:contato@blocklize.tech" className={Styles.standardLink}>
                          Fale conosco
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                        
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                        
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                          
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-6 mb-5 mb-lg-0">
                  <div className={Styles.linkColumn}>
                    <h1 className={Styles.linkColumn__title}>
                      Compliance
                    </h1>
                    <ul className={Styles.linkList}>
                      <li className={Styles.linkList__item}>
                        <Link href="mailto:contato@blocklize.tech" className={Styles.standardLink}>
                          Ouvidoria
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                          
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                          
                        </Link>
                      </li>
                      <li className={Styles.linkList__item}>
                        <Link href="#" className={Styles.standardLink}>
                          
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
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