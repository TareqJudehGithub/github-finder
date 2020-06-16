import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
     return (
          <div>
               <Link to="/" className="btn btn-light">&#10094; Back</Link>
               <div style={{
                    textAlign: "center",
                    width: "50%",
                    margin: "10% auto"
               }}>
                    <h2 style={{margin: "10px auto"}}>Page not found!</h2>
                    <p>The page your are looking for does not exist.</p>
               </div>          
          </div>
     )
}

export default NotFound;
