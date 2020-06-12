import React from 'react'
import Logo from "../../assets/images/spinner.gif"

const Spinner = () => {
     return (
          <React.Fragment>        
               <span ></span>     
               <img src={Logo} alt= "Loading..." 
               style={{width: "200px", display: "block", margin: "auto"}}
               />
          </React.Fragment>
     )
}
export default Spinner
