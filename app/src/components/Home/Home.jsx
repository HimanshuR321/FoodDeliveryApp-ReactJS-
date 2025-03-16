import React, { useEffect, useState } from 'react';
import logo from "../../images/logo.png";
import Button from '../Button/Button';
import styles from "./Home.module.css";
export const BASE_URL = "http://localhost:9000";
import Card from '../Card/Card';
import cart from "../../images/cart.png"
import cross from "../../images/cross.png"
import Cart from '../Cart/Cart';

const Home = () => {
  const [searchQuery,setsearchQuery]=useState("");
  const [cards,setCards] = useState([]);
  const [activeBtn,setActiveBtn]=useState("");
  const [carts,setCarts]=useState({}); // carts contain {name:true if in cart false if not}
  const [quantity,setQuantity]=useState({}); // quanitity contain {name:no. of dishes in cart} 
  const [total,setTotal]=useState(0);
  const [cartList,setCartList]=useState(false);
  const [priceList,setPriceList]=useState({}); // priceList contains {name:its price}

  useEffect(()=>{
    fetch( `${BASE_URL}/`)
      .then((res)=>res.json())
      .then((data)=>{
        setCards(data);
        const initialState={};
        data.forEach((food)=>{
          initialState[food.name]=false;
        });
        setCarts(initialState);
        const initialQuantity={};
        data.forEach((food)=>{
          initialQuantity[food.name]=0;
        })
        setQuantity(initialQuantity);
        const initialPrice={};
        data.forEach((food)=>{
          initialPrice[food.name]=food.price;
        })
        setPriceList(initialPrice);
      })
      .catch((err)=>console.error("Error fetching data:",err));
  },[]);

  const handleActive=(category)=>{
    setActiveBtn(category);
  }
  const cartClick = (name)=>{
    setCarts((prev)=>({
      ...prev,
      [name]:true,
    }))
    setQuantity((prev)=>({
      ...prev,
      [name]:(prev[name]||0)+1,
    }))
  }
  const btnArr=["All","Breakfast","Lunch","Dinner"];  

  const filteredCards=()=>{
    let filteredList=cards;
    if(activeBtn!=="All" && activeBtn!==""){
      filteredList=filteredList.filter((food)=>food.type.toLowerCase()===activeBtn.toLowerCase());
    }
    if(searchQuery.trim()!==""){
      filteredList=filteredList.filter((food)=>
        food.name.toLowerCase().startsWith(searchQuery.toLowerCase()) 
      );
    }
    return filteredList;
  }

  const handleIncrement = (name)=>{
    setQuantity((prev)=>({
      ...prev,
      [name]:(prev[name]||0)+1,
    }))
  }
  const handleDecrement = (name)=>{
    setQuantity((prev)=>({
      ...prev,
      [name]:(prev[name]||0)-1,
    }))
    if(quantity[name]===1){
      setCarts((prev)=>({
        ...prev,
        [name]:false,
      }))
    }
  }

  const handleCartList = () =>{
    if(cartList===true){
      setCartList(false);
    } else{
      setCartList(true);
    }
  }

  const handleDelete = (name) =>{
    setCarts((prev) => ({
      ...prev,
      [name]: false,
    }));
  
    setQuantity((prev) => ({
      ...prev,
      [name]:0,
    }));
  
    setTotal((prevTotal) => prevTotal - (quantity[name] || 0));
  }

  useEffect(()=>{
    let totalDishes=0;
    for(let key in quantity){
      totalDishes+=quantity[key];
    }
    setTotal(totalDishes);
  },[quantity]);
  
  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.search}>
            <img src={logo} alt="" />
            <input type="text" placeholder='Search Food....' value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
        </div>
        <div className={styles.Btn}>
            {btnArr.map((category)=>(
              <Button key={category} text={category} onClick={()=>handleActive(category)} isActive={activeBtn===category}/>
            ))}
        </div>
        <div className={styles.cartDiv}>
          <button onClick={handleCartList} className={styles.cartBtn}>
            {cartList? 
                <img src={cross} alt="" /> : 
              <div>
                <img src={cart} alt="" />
                <p>{total===0?"":total}</p> 
              </div> 
            }
          </button>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {filteredCards().map((food,index) => (
          <Card
            key={index}
            image={`${BASE_URL}${food.image}`}
            dish={food.name}
            data={food.text}
            price={`$${food.price}`}
            cartClick={()=>cartClick(food.name)}
            flag={carts[food.name]}
            quantity={quantity[food.name]}
            handleIncrement={()=>handleIncrement(food.name)}
            handleDecrement={()=>handleDecrement(food.name)}
          />
        ))}
        <div className={styles.bill}>
          {cartList && <Cart 
                          quantity={quantity} 
                          carts={carts}
                          priceList={priceList}
                          handleIncrement={handleIncrement}
                          handleDecrement={handleDecrement}
                          handleDelete={handleDelete}/>}
        </div>
      </div> 
    </div>
  )
}

export default Home