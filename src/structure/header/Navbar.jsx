import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className="link f_flex capitalize" >
             
              <li>
                <Link to='/Acceuil'>Accueil</Link>
              </li>
              <li>
                <Link to='/Produits'>Produits</Link>
              </li>
              <li>
                <Link to='/Pages'>Pages</Link>
              </li>
              <li>
                <Link to='/propos'>A propos</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/inscription'>Inscription</Link>
              </li>
            </ul>

      
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
