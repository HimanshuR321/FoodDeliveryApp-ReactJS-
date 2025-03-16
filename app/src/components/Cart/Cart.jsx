import React from 'react'
import styles from "./Cart.module.css"
import Item from '../Items/Item'
const Cart = (props) => {
    const {carts,quantity,handleIncrement,handleDecrement,handleDelete,priceList}=props;
  return (
    <div>
      <div className={styles.billingPage}>
        <p className={styles.order}>Order Items</p>
        <div className={styles.itemContainer}>
            {
                Object.keys(carts).map((food)=>{
                    if(carts[food]){
                        return (
                            <Item
                                key={food}
                                name={food}
                                quantity={quantity[food]}
                                handleDecrement={()=>handleDecrement(food)}
                                handleIncrement={()=>handleIncrement(food)}
                                handleDelete={()=>handleDelete(food)}
                                price={priceList[food]*quantity[food]}/>
                        )
                    }
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Cart
