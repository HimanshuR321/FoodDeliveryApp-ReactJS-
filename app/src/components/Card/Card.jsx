import React, { useState } from 'react'
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
            { props.flag ? 
              <div className={styles.count}>
                  <button onClick={props.handleDecrement}>-</button>
                  <p>{props.quantity}</p>
                  <button onClick={props.handleIncrement}>+</button>
              </div> :
              <div className={styles.add}>
                  <button onClick={props.cartClick} className={styles.btn}>Add to cart</button>
              </div>
            }
            <div className={styles.price}>{props.price}</div>
        </div>
    </div>
  )
}

export default Card
