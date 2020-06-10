import React from 'react'
import Logo from "../../assets/images/spinner.gif"

const Spinner = () => {
     return (
          <React.Fragment>
               <img src={Logo} alt= "Loading..."
               style={{
                    width: "200px",
                    margin: "auto",
                    display: "block" //to enable the margin: "auto"
               }}
               />
          </React.Fragment>
     )
}
export default Spinner
