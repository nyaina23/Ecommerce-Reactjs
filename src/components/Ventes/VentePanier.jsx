

import React from "react"

const VentePanier = ({ VenteItems, ajoutpanier }) => {

  return (
    <>
      {VenteItems.map((VenteItems) => {
        return (
          <div className='box'>
            <div className='produit mtop'>
              <div className='img'>
                <span className='remise'>{VenteItems.remise}% Remise</span>
                <div className="banner-img">
                     <img  className="image-fluid" src={VenteItems.sary} alt='' />
                </div>
              </div>
              <div className='produit-details'>
                <h3>{VenteItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='prix'>
                  <h4>{VenteItems.prix}.00 € </h4>
                  <button className="btn-orange" onClick={() =>  ajoutpanier(VenteItems)}>
                      Ajouter au Panier

                    </button>
             
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default VentePanier
