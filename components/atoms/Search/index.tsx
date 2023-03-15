import React from 'react'
import Styles from './styles.module.scss'
import Image from 'next/image'

import Icon from '@/assets/img/Search.png'

const Search = () => {
  return (
    <div className={Styles.search}>
      <input
        type="text"
        placeholder='Pesquisar'
        className={Styles.search__input}
      />
      <Image
        src={Icon}
        width={20}
        height={undefined}
        alt="Search Icon"
      />
    </div>
  )
}

export default Search