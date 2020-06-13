import React from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import SingleUser from "./components/users/SingleUser";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from './components/pages/About'
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import './App.css';

class App extends React.Component {
 
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }
  
//handlers:
  //Search Github users:   //api.github/search/users?q={prop}
  searchUsersHandler = async (text) => {  

    this.setState({ loading: true})

    const response = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

    this.setState({
      users: response.data.items,   //.items only for search results
      loading: false,
      alert: null
    })
  };
  //Get single Github user:  //api.github/users/username
  getUser = async (username) => {

    this.setState({ loading: true})

    const response = await axios
    .get(`https://api.github.com/users/${username}?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      user: response.data,   //.data only for a user
      loading: false
      })
  };

  //get users repos:  //api.github.com/users/username/repos
  getUserRepos = async (username) => {
    this.setState({ loading: true})

    const response = await axios
    .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    
    this.setState({
      repos: response.data,
      loading: false
    })
  }
  
  //Clears Github users search result.
  clearUsersHandler = () => {
    this.setState({
       users: [],
        loading: false,
        alert: null
      })
  };
  //Alerts upon submission with no input data:
  setAlertHandler = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };
 
  render() {

    const { users, user, repos, loading } = this.state;
   
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
              )}
            />
            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" 
              render={props => (
                <SingleUser 
                  { ...props } 
                  getUser={this.getUser} 
                  user={user}
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                  loading={loading}
                />
            )}/>
          </Switch>   
        </div>
      </div>
    );
  }
}

export default App;
