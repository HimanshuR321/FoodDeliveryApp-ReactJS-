import React from 'react'
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className={`${props.isActive?styles.active:""} ${styles.btn}`}>{props.text}</button>
    </div>
  )
}

export default Button
