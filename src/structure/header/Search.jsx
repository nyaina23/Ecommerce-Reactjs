import React from "react"

import { Link } from "react-router-dom"

const Search = ({ PanierItem }) => {

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src="../images/logo.png" alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Rechercher...' />
            <span>Toutes les Categories</span>
          </div>

          <div className='icon f_flex width'>
         
            <div className='Panier'>
                 <Link to='/Panier'>
                <i className='fa fa-Venteping-Panier icon-circle'></i>
                <span className="number-Panier">{PanierItem.length === 0 ? "0" : PanierItem.length}</span>
              </Link>
            </div>
                <Link to ={'/'}>  <i className='fa fa-user icon-circle'></i></Link>
          
        
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
