import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const PopImage = ({ produitsItems, ajoutpanier }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {produitsItems.map((produitsItems) => {
          return (
            <div className='box'>
              <div className='produit mtop'>
                <div className='img'>
                  <span className='remise'>{produitsItems.remise}% Remise</span>
                  <div className="banner-img">
                  <img className="image-fluid" src={produitsItems.sary} alt='' />
                  </div>
            
         
                </div>
                <div className='produit-details'>
                  <h3>{produitsItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='prix'>
                    <h4>{produitsItems.prix}.00 € </h4>
            
                    <button className="btn-orange" onClick={() => ajoutpanier(produitsItems)}>
                      Ajouter au Panier

                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default PopImage
