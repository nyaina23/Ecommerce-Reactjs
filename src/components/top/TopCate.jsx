import React from "react"
import "./style.css"
import TopPanier from "./TopPanier"
import "../../font-awesome/css/font-awesome.min.css"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa-solid fa-border-all'></i>
              <h2>Top Categories</h2>
            </div>
            <div className='heading-right row '>
              <span>Tout voir</span>
              <i className='fa fa-caret-right'></i>
            </div>
          </div>
          <TopPanier />
        </div>
      </section>
    </>
  )
}

export default TopCate
