import React, { useEffect, useState } from 'react'
import styles from "./Favourites.module.css"

function Favourite() {
  const [data,setData] = useState([])
                    // fetching data
  useEffect(()=>{
    const getData = async()=>{
       try {
          let res= await fetch("http://localhost:8080/Favourites");
          let info = await res.json();
          setData([...info])
       } catch (error) {
          console.log("error")
       }
    }
    getData()
  },[])
  return (
    <div>
        <div id={styles.main}>
        {data.map((ele)=>(
                <div id={styles.row}>
                    <img src={ele.img}/>

                    <div id={styles.upper}>
                    <p id={styles.price} ><span>₹{ele.price}</span>/month</p>
                    </div>

                    <div id={styles.middle}>
                    <h2>Name: {ele.name}</h2>
                    <p>Location: {ele.location}</p>
                    </div>

                    <div id={styles.bottom}>
                    <p>{ele.bed}  {ele.bed>1?"Beds" : "Bed"} </p>
                    <p>{ele.bathroom}  {ele.bathroom>1?"Bathrooms" : "Bathroom"} </p>
                    <p>Property-type:{ele.type}</p>
                    </div>

                </div>
             ))}
        </div>
    </div>
  )
}

export default Favourite