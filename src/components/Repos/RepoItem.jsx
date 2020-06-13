import React from 'react'
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {

     const { html_url, name } = repo;
     return (
          <div>
               <h3>
                    <a 
                         style={{color: "black"}} 
                         href={html_url}
                         >
                              {name}
                         </a>
               </h3>
          </div>
     )
}
RepoItem.prototype = {
     repos: PropTypes.object.isRequired
}
export default RepoItem;
