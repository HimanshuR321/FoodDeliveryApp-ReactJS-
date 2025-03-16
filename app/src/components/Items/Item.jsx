import React from 'react'
import image from "../../images/image.png"
import styles from "./Item.module.css"
import bin from "../../images/delete.png"

const Item = (props) => {
  return (
    <>
      <div className={styles.itemCard}>
        <div className={styles.left}>
          <img src={image} alt=""/>
          <div className={styles.nameNbuttons}>
            <p className={styles.name}>{props.name}</p>
            <div className={styles.count}>
              <button onClick={props.handleDecrement}>-</button>
              <p>{props.quantity}</p>
              <button onClick={props.handleIncrement}>+</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.price}>${props.price}</p>
          <img onClick={props.handleDelete} src={bin} alt="" />
        </div>
      </div>
    </>
  )
}

export default Item