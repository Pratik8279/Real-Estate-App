import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div>
         <Link to= "/">Home</Link>
         <Link to= "/favourites">Favourites</Link>
    </div>
  )
}

export default Navbar