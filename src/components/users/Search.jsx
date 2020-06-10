import React, { Component } from 'react'
import PropTypes from "prop-types";


class Search extends Component {
     state = {
          text: ""
     }
     onChange = event => {
          const { name, value } = event.target;
          this.setState({ [name]: value})
     }
     onSubmit = event => {
          event.preventDefault();

          if( this.state.text === ""){
               this.props.setAlert("Please enter some text", 'light');
          }
          else{
               this.props.searchUsers(this.state.text);
               this.setState({ text: ""});          
          }      
     }

     render() {

          const { clearUsers, showClear } = this.props;
          return (
               <div className="form">
                    <form 
                         className="form"
                         onSubmit={this.onSubmit}>
                         <input 
                         
                              type="text" 
                              name="text"
                              value={this.state.text} 
                              placeholder="search users.."
                              onChange={this.onChange}
                         />
                         <input  
                              type="submit" 
                              value="search"
                              className="btn btn-dark btn-block"
                         />
                    </form>
                    {
                         showClear
                         &&
                         <button 
                         className="btn btn-light btn-block btn-clear"
                         onClick={clearUsers}
                         > 
                         Clear
                         </button>
                    }
                  
               </div>
          )
     };
     static propTypes = {
          searchUsers: PropTypes.func.isRequired,
          clearUsers: PropTypes.func.isRequired,
          showClear: PropTypes.bool.isRequired,
          setAlert: PropTypes.func.isRequired,
         
     };
};
export default Search


   // searchState: PropTypes.string.isRequired,
          // searchInput: PropTypes.func.isRequired,