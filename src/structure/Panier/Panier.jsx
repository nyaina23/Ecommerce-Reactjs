import React from "react"
import "./style.css"
import "../../font-awesome/css/font-awesome.min.css"
const Panier = ({ PanierItem, ajoutpanier, decreaseqte }) => {

  const totalprix = PanierItem.reduce((prix, item) => prix + item.qte * item.prix, 0)


  return (
    <>
      <section className='Panier-items'>
        <div className='container d_flex'>
   

          <div className='Panier-details'>
            {PanierItem.length === 0 && <h1 className='no-items produit'>Veuilez ajouter un produit à votre Paniere</h1>}

            {PanierItem.map((item) => {
              const produitqte = item.prix * item.qte

              return (
                <div className='Panier-list produit d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.sary} alt='' />
                  </div>
                  <div className='Panier-details'>
                    <h3>{item.name}</h3>
                    <h4>
                     {item.prix}.00 € * {item.qte} Pièce
                      <span>  = {produitqte}.00 €</span>
                    </h4>
                  </div>
                  <div className='Panier-items-function'>
                  
                
                    <div className='PanierControl d_flex'>
                      <button className='incPanier' onClick={() => ajoutpanier(item)}>
                        <i className='fa fa-plus'></i>
                      </button>
                      <button className='desPanier' onClick={() => decreaseqte(item)}>
                        <i className='fa fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='Panier-item-prix'></div>
                </div>
              )
            })}
          </div>

          <div className='Panier-total produit'>
            <h2>Total Panier</h2>
            <div className=' d_flex'>
              <h4>Prix Total :</h4>
              <h3>{totalprix}.00 €</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Panier
