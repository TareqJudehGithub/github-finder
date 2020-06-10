import React from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from './components/pages/About'
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import './App.css';

class App extends React.Component {
 
  state = {
    users: [],
    loading: false,
    alert: null
  }
 
  searchUsersHandler = async (text) => {  //text state in Search.jsx
    this.setState({ loading: true})
    const response = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({
      users: response.data.items,
      loading: false,
      alert: null
    })
  };

  clearUsersHandler = () => {
    this.setState({
       users: [],
        loading: false,
        alert: null
      })
  };

  setAlertHandler = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };
 
  render() {

    const { users, loading } = this.state;

    return (
    
         <div className="App">
        <Navbar /> 
        <div className="container">
          <Alert 
          alert={this.state.alert} />   {/* current state of alert */}
          <Switch>
            <Route exact path="/" render={props => ( //rending more than 1 component.
              <React.Fragment>
                <Search
                  searchUsers={this.searchUsersHandler}
                  clearUsers={this.clearUsersHandler}
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlertHandler}
                  />

                  <Users
                  loading={loading}
                  users={users}
                  />
              </React.Fragment>
            )}/>
            <Route exact path="/about" component={About}/>
          </Switch>   
        </div>
      </div>
      
     
    );
  }
  
}

export default App;



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

  

/*  
  // searchInputHandler = (event) => {
  //   this.setState({ text: event.target.value })
  // }

 searchState={this.state.text}
searchInput={this.searchInputHandler}

*/