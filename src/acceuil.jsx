import React, { useState } from "react"
import "./main.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./structure/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Panier from "./structure/Panier/Panier"
import Footer from "./structure/footer/Footer"
import Vdata from "./components/Ventes/Vdata"



function Acceuil() {

  const { produitsItems } = Data
  const { VenteItems } = Vdata
  const [PanierItem, setPanierItem] = useState([])
  const ajoutpanier =(produit) => {
    const produitExit = PanierItem.find((item) => item.id === produit.id)
    if(produitExit) {
      setPanierItem(PanierItem.map((item) => (item.id === produit.id ? { ...produitExit, qte: produitExit.qte + 1 } : item)))
    } else {
      setPanierItem([...PanierItem, { ...produit, qte: 1 }])
    }
  }

  const decreaseqte =(produit) => {
  
    const produitExit = PanierItem.find((item) => item.id === produit.id)

  
    if(produitExit.qte === 1) {
      setPanierItem(PanierItem.filter((item) => item.id !== produit.id))
    } else {
    
      setPanierItem(PanierItem.map((item) => (item.id === produit.id ? { ...produitExit, qte: produitExit.qte - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header PanierItem={PanierItem} />
           <Route path='/Acceuil' exact>
            <Pages produitsItems={produitsItems} ajoutpanier={ajoutpanier} VenteItems={VenteItems} />
          </Route>
          <Route path='/Panier' exact>
            <Panier PanierItem={PanierItem} ajoutpanier={ajoutpanier} decreaseqte={decreaseqte} />
          </Route>
     
        <Footer />


      </Router>
    </>
  )
}

export default Acceuil
