import React, { useState, useContext } from 'react';

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = ( ) => {
     
     const githubContext = useContext(GithubContext);
     const alertContext = useContext(AlertContext);
     const { searchUsersHandler, users, clearUsersHandler } = githubContext;
     const [text, setText] = useState("");

     const onChange = event => {    
          setText(event.target.value);
     }

     const onSubmit = event => {
          event.preventDefault();

          if( text === ""){
               alertContext.setAlertHandler("No input data were entered.", 'light');        
          }
          else{ 
               searchUsersHandler(text); 
               setText("");    
          }    
     }

          return (
               <div className="form">
                   
                         <form 
                         className="form"
                         onSubmit={onSubmit}>
             
                              <input     
                              type="text" 
                              name="text"       
                              value={text} 
                              placeholder="search users.."
                              onChange={onChange}
                         />   
                    {
                         users.length && text === ""
                         ?
                         <button 
                         className="btn btn-dark btn-block"
                         onClick={clearUsersHandler}
                         > 
                         Clear list
                         </button>
                         :      
                         <input  
                              type="submit" 
                              value="Search Github users"
                              className="btn btn-dark btn-block"
                         />
                    }
                    </form>
                    
               </div>
          )
};

export default Search
