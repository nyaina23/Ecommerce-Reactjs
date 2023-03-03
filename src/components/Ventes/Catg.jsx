import React from "react"

const Catg = () => {
  const data = [
    {

      cateName: "Fruits Sechées",
    },
    {

      cateName: "Fruit Confits",
    },
    {

      cateName: "Patte de fruits",
    },
    {
   
      cateName: "Tutti Fruits",
    },
    {

      cateName: "Rouleau de Fruits",
    },
    {
 
      cateName: "Poudre de Fruits",
    },
  ]
  return (
    <>
      <div className='categorie'>
        <div className='chead d_flex'>
          <h1>Categories Produits</h1>
        
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
         
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Voir Plus</button>
        </div>
      </div>
    </>
  )
}

export default Catg
