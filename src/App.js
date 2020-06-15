import React from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import SingleUser from "./components/users/SingleUser";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from './components/pages/About'
import { Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import './App.css';

const App = () =>  {
 
    return (
      <GithubState>
        <AlertState>
          <div className="App">
            <Navbar /> 
            <div className="container">
             
              <Switch>
                <Route exact path="/" render={props => ( //rending more than 1 component.
                  <React.Fragment>
                    <Search /> 
                    <Alert />         
                    <Users />
                  </React.Fragment>
                  )}
                />
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" component={SingleUser} />
              </Switch>   
            </div>
          </div>
        </AlertState>
      </GithubState>
    );
}
export default App;
