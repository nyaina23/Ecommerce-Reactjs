import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Handsome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
            
           
            </div>
          </div>

          <div className='box'>
            <h2>A Propos</h2>
            <ul>
              <li>lorem ipsum</li>
              <li>dolor sit</li>
              <li>amet, consectetur</li>
              <li>adipiscing elit</li>
              <li>Auctor libero</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Parametre</h2>
            <ul>
            <li>lorem ipsum</li>
              <li>dolor sit</li>
              <li>amet, consectetur</li>
              <li>adipiscing elit</li>
              <li>Auctor libero</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Nous Contacter</h2>
            <ul>
              <li>Antananarivo, Madagascar </li>
              <li>Email:beketrika@gmail.com</li>
              <li>Phone: +261 34 18 522 33</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
