import React from "react"
import Home from "../components/Main/Home"
import PopAction from "../components/Populaire/popAction"
import TopCate from "../components/top/TopCate"
import "../font-awesome/css/font-awesome.min.css"

import Vente from "../components/Ventes/Vente"


const Pages = ({ produitsItems, ajoutpanier, PanierItem, VenteItems }) => {
  return (
    <>
      <Home PanierItem={PanierItem} />
      <PopAction produitsItems={produitsItems} ajoutpanier={ajoutpanier} />
      <TopCate />
 
      <Vente VenteItems={VenteItems} ajoutpanier={ajoutpanier} />
    

    </>
  )
}

export default Pages
