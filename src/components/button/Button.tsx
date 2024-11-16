import React from 'react'
import styles from './Button.module.css'

function Button(props: {text: string}) {
  const {text} = props

  return (
    <>
      <button className={styles.button}>{text}</button>
    </>
  )
}

export default Button