import React, { useEffect, useState } from 'react';
import logo from "../../images/logo.png";
import Button from '../Button/Button';
import styles from "./Home.module.css";
export const BASE_URL = "http://localhost:9000";
import bg from "../../images/background.png"
import Card from '../Card/Card';


const Home = () => {
  const [searchQuery,setsearchQuery]=useState("");

  const [cards,setCards] = useState([]);
  useEffect(()=>{
    fetch( `${BASE_URL}/`)
      .then((res)=>res.json())
      .then((data)=>setCards(data))
      .catch((err)=>console.error("Error fetching data:",err));
  },[]);

  const [activeBtn,setActiveBtn]=useState("");
  const handleActive=(category)=>{
    setActiveBtn(category);
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
      </div>
      <div className={styles.background}>
        <img src={bg} alt="" />
      </div>
      <div className={styles.cardContainer}>
        {filteredCards().map((food,index) => (
          <Card
            key={index}
            image={`${BASE_URL}${food.image}`}
            dish={food.name}
            data={food.text}
            price={`$${food.price}`}
          />
        ))}
      </div> 
    </div>
  )
}

export default Home
