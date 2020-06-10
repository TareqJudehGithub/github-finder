import React from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

import axios from "axios";
import './App.css';

class App extends React.Component {
 
  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
   
  //   this.setState({ loading: true});

  //   const response = await axios
  //   .get(`https://api.github.com/users?client_id=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({
  //     users: response.data,
  //     loading: false
  //   });
  // }

  //methods:
 
  searchUsers = async (text) => {  //text state in Search.jsx
    this.setState({ loading: true})
    const response = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({
      users: response.data.items,
      loading: false
    })
  }
 
  render() {
    
    const filteredUsers = this.state.users.filter(user =>
      user.login.toLowerCase());
    return (
      
      <div className="App">
        <Navbar /> 

        <div className="container">
          <Search
          searchUsers={this.searchUsers}
          />
          <Users
          loading={this.state.loading}
          users={filteredUsers}
          />
        </div>
        
      </div>
      

    );
  }
  
}

export default App;
