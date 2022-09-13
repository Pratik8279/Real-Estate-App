import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from "./Home.module.css"

function Home() {
    const [data,setData] = useState([])
    useEffect(()=>{
      const getData = async()=>{
         try {
            let res= await fetch("http://localhost:8080/property");
            let info = await res.json();
            setData([...info])
            // console.log(info)
            console.log(data)
         } catch (error) {
            console.log("error")
         }
      }
      getData()
    },[])

   const handleChange= (e)=>{
  
    setData([...data])
    let new_data = data.filter((ele)=>{
      return ele.name.includes(e.target.value)
     })
     setData([...new_data])
   }

     const handleChange1= (e)=>{
      setData([...data])
         let new_data = data.filter((ele)=>{
          return ele.type.includes(e.target.value)
         })
         setData([...new_data])
     }
     const handleChange2= (e)=>{
      setData([...data])
      let new_data = data.filter((ele)=>{
        return ele.bed == e.target.value
       })
       setData([...new_data])

      }

      const handleChange3= (e)=>{
        setData([...data])
        let new_data = data.filter((ele)=>{
          return ele.bathroom == e.target.value
         })
         setData([...new_data])
      }

      const handleChange4= (e)=>{
        setData([...data])
        let new_data = data.filter((ele)=>{
          return ele.price > e.target.value
         })
         setData([...new_data])
      }
    
  return (
    <div>
      <div>
          <input type="text" onChange={handleChange} placeholder = "Search Your Proerty here..."/>
      </div>
      <div id={styles.filterContain}>
          <select name="" id={styles.house} onChange= {handleChange1}>
            <option value="">Select House Type</option>
            <option value="Flat">Flat</option>
            <option value="bungalow">Bungalow</option>
            <option value="Row-house">Row-House</option>
          </select>

          <select name="" id={styles.bed} onChange= {handleChange2}>
            <option value="">Select Bed</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5 Bedrooms</option>
            <option value="6">6 Bedrooms</option>
          </select>

          <select name="" id={styles.bathroom} onChange= {handleChange3}>
            <option value="">Select Bathroom</option>
            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3 Bathrooms</option>
            <option value="4">4 Bathrooms</option>
            <option value="5">5 Bathrooms</option>
            <option value="6">6 Bathrooms</option>
          </select>

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
                <div id={styles.unit}>
                    <img src={ele.img}/>

                    <div id={styles.upper}>
                    <p id={styles.price} ><span>₹{ele.price}</span>/month</p>
                    </div>

                    <div id={styles.middle}>
                    <h2>Name: {ele.name}</h2>
                    <p>Location: {ele.location}</p>
                    </div>

                      <hr />

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