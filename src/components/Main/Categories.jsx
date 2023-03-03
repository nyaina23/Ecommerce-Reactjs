import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/categorie/cat1.png",
      cateName: "Fruits Sechés",
    },
    {
      cateImg: "./images/categorie/cat2.jpg",
      cateName: "Fruits Confits",
    },
    {
      cateImg: "./images/categorie/cat3.png",
      cateName: "Patte de Fruits",
    },
    {
      cateImg: "./images/categorie/cat4.jpg",
      cateName: "Poudre de Fruits",
    },
    {
      cateImg: "./images/categorie/cat5.jpg",
      cateName: "Rouleau de Fruits",
    },
    {
      cateImg: "./images/categorie/cat11.jpg",
      cateName: "Tutti Fruits",
    },
    {
      cateImg: "./images/categorie/cat6.jpg",
      cateName: "Confiture",
    },
    {
      cateImg: "./images/categorie/cat7.jpg",
      cateName: "Jus de Fruits",
    },
    {
      cateImg: "./images/categorie/cat8.jpg",
      cateName: "Fruits Frèches",
    },
    {
      cateImg: "./images/categorie/cat9.jpg",
      cateName: "Mélanges de Fruits",
    },
    {
      cateImg: "./images/categorie/cat10.jpg",
      cateName: "Tarte au Fruit",
    },
  ]

  return (
    <>
      <div className='categorie'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
