import React from 'react'
import TokenShow from '@/components/molecules/TokenShow'

type Props = {
  onClick?: any
}

const TokenList = ({ onClick }: Props) => {
  return (
    <>
      <TokenShow onClick={onClick} />
      <TokenShow onClick={onClick} />
      <TokenShow onClick={onClick} />
      <TokenShow onClick={onClick} />
      <TokenShow onClick={onClick} />
      <TokenShow onClick={onClick} />
      <TokenShow onClick={onClick} />
    </>
  )
}

export default TokenList