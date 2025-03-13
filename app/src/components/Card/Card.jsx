import React from 'react'
import styles from "./Card.module.css"

const Card = (props) => {
  return (
    <div>
        <div className={styles.card}>
            <img src={props.image} alt=""/>
            <div className={styles.text}>
                <p className={styles.dish}>{props.dish}</p>
                <p className={styles.data}>{props.data}</p>
            </div>
            <div className={styles.price}>{props.price}</div>
        </div>
    </div>
  )
}

export default Card
