import React from 'react'
import Styles from './styles.module.scss'
import Content from './content.json'

type Props = {
  type: boolean | null
}

const FormFeedback = ({ type }: Props) => {
  const handleFormText = () => {
    return type ? Content.success : Content.error
  }

  return (
    <div className={Styles.formFeedback}>
      <h2 className={Styles.formFeedback__title}>
        {handleFormText()}
      </h2>
    </div>
  )
}

export default FormFeedback