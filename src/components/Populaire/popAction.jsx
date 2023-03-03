import React from "react"
import PopImage from "./popImage"
import "./style.css"

const PopAction = ({ produitsItems, ajoutpanier }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
   
            <h1>Articles le plus Vendues</h1>
          </div>
          <PopImage produitsItems={produitsItems} ajoutpanier={ajoutpanier} />
        </div>
      </section>
    </>
  )
}

export default PopAction
