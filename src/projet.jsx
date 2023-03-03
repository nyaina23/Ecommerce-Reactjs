import {Link} from "react-router-dom"
import Typical from "react-typical"
function Projet(){
    return(

        <div className="banner-acceuil">
            <div className="center">
            <img src="./images/logoAcceuil.png" alt="" />
           <h1>Ny vokatry ny Tantsaha</h1>
           <p> Un Site E-Commerce developpé par :</p>
         
           <h2>
              <Typical
               loop={Infinity}
              wrapper = "b"
              steps={[
                "Andson RAJAONA",
                1000,
                "Un Développeur FullStack",
                1000
              
              ]}  />
             
           </h2>
         <button className="btn-acceuil"><Link to ={'/Acceuil'}>Voir le Projet</Link></button>
             
            </div>
       
        </div>
     
    )
}

export default Projet