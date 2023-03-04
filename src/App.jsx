import React, { useState } from "react"
import "./main.css"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Data from "./components/Data"

import Vdata from "./components/Ventes/Vdata"
import Projet from "./projet"

import Acceuil from "./acceuil"

import '../src/bootstrap/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Router>

          <Route path='/' exact>
           <Projet />
          </Route>
          <Route path='/Acceuil' exact>
           <Acceuil />
          </Route>
     

      </Router>
    </>
  )
}

export default App
