import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div id={styles.nav}>
         <Link to= "/">Home</Link>
         <Link to= "/favourites">Favourites</Link>
    </div>
  )
}


export default Navbar