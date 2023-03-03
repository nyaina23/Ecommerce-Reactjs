import React from "react"
import Catg from "./Catg"
import VentePanier from "./VentePanier"
import "./style.css"

const Vente = ({ ajoutpanier, VenteItems }) => {
  return (
    <>
      <section className='Vente background'>
        <div className='container d_flex'>
         

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Produits</h2>
              </div>
           
            </div>
            <div className='produit-content  grid1'>
              <VentePanier ajoutpanier={ajoutpanier} VenteItems={VenteItems} />
            </div>
          </div>

          <Catg />
        </div>
      </section>
    </>
  )
}

export default Vente
