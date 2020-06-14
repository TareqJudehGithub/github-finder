import React from 'react'
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {

     const { html_url, name } = repo;
     return (
          <div>
               <p>
                    <a 
                         style={{color: "black", fontWeight: 500}} 
                         href={html_url}
                         >
                              {name}
                         </a>
               </p>
          </div>
     )
}
RepoItem.prototype = {
     repos: PropTypes.object.isRequired
}
export default RepoItem;
