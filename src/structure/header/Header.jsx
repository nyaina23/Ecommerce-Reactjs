import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"
import "../../font-awesome/css/font-awesome.min.css"

const Header = ({ PanierItem }) => {
  return (
    <>
      <Head />
      <Search PanierItem={PanierItem} />
      <Navbar />
    </>
  )
}

export default Header
