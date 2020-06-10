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
          event.preventDefault()
          this.props.searchUsers(this.state.text)
          this.setState({ text: ""});
     }

     render() {
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
               </div>
          )
     };
     static propTypes = {
          searchUsers: PropTypes.func.isRequired
     };
};
export default Search
