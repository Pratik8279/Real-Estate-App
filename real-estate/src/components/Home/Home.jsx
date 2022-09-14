import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from "./Home.module.css"

function Home() {
    const [data,setData] = useState([])

                  // fetching data

    let getData = async()=>{
      try {
         let res= await fetch("https://pratikmock.herokuapp.com/property");
         let info = await res.json();
         setData([...info])
        return info
      } catch (error) {
         console.log("error")
      }
   }

    useEffect(()=>{
      getData()
    },[])

                         {/* Search functionality */}

   const handleChange= async(e)=>{
    let data = await getData()
    let new_data = data.filter((ele)=>{
      return ele.name.includes(e.target.value)
     })
     setData([...new_data])
   }

                        {/* filtering with property type */}

     const handleChange1= async(e)=>{
      let data = await getData()
      let new_data = data.filter((ele)=>{
          return ele.type.includes(e.target.value)
         })
         setData([...new_data])
     }

                            {/* filtering with number of bedrooms */}

     const handleChange2= (e)=>{

      let new_data = data.filter((ele)=>{
        return ele.bed == e.target.value
       })
       setData([...new_data])

      }

                         {/* filtering with number of bathrooms */}

      const handleChange3= (e)=>{

        let new_data = data.filter((ele)=>{
          return ele.bathroom == e.target.value
         })
         setData([...new_data])
      }

                          {/* filtering with price */}

      const handleChange4= async(e)=>{
        
        let new_data = data.filter((ele)=>{
          return ele.price > e.target.value
         })
         setData([...new_data])
      }

                // Post request to favourite page

      const handleClick = async({img,name,location,price,bed,bathroom,type})=>{
           let res = await fetch("https://pratikmock.herokuapp.com/Favourites",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
              img,
              name,
              location,
              price,
              bed,
              bathroom,
              type
            })
           })
           let data = await res.json()
           console.log(data)
      }
    
  return (
    <div>
      <div>
                         {/* Search functionality */}

          <input id={styles.search} type="text" onChange={handleChange} placeholder = "Search Your Property here..."/>

      </div>
                        {/* filtering with property type */}

      <div id={styles.filterContain}>
          <select name="" id={styles.house} onChange= {handleChange1}>
            <option value="">Select House Type</option>
            <option value="Flat">Flat</option>
            <option value="bungalow">Bungalow</option>
            <option value="Row-house">Row-House</option>
          </select>

                       {/* filtering with number of bedrooms */}

          <select name="" id={styles.bed} onChange= {handleChange2}>
            <option value="">Select Bed</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5 Bedrooms</option>
            <option value="6">6 Bedrooms</option>
          </select>

                      {/* filtering with number of bathrooms */}

          <select name="" id={styles.bathroom} onChange= {handleChange3}>
            <option value="">Select Bathroom</option>
            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
            <option value="4">4 Bathrooms</option>
            <option value="5">5 Bathrooms</option>
            <option value="6">6 Bathrooms</option>
          </select>

                             {/* filtering with price */}

          <select name="" id={styles.rate} onChange= {handleChange4}>
            <option value="">Filter by Price</option>
            <option value="10000">Greater than ₹10000</option>
            <option value="30000">Greater than ₹30000</option>
            <option value="50000">Greater than ₹50000</option>
            <option value="80000">Greater than ₹80000</option>
          </select>

      </div>
        <div id= {styles.parent}>
             {data.map((ele)=>(
                <div id={styles.unit} key = {ele.id}>

                    <img src={ele.img}/>
                                            {/* upper part */}
                    <div id={styles.upper}>
                    <p id={styles.price} ><span>₹{ele.price}</span>/month</p>
                    <div><i  id={styles.favBtn} onClick = {()=> handleClick(ele)} className="fa-solid fa-heart"></i></div>   
                    </div>

                                           {/* middle part */}

                    <div id={styles.middle}>
                    <h2>Name: {ele.name}</h2>
                    <p>Location: {ele.location}</p>
                    </div>

                      <hr />
                                            {/* bottom part */}
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

export default Home