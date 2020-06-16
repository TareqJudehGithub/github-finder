import React from 'react';
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import SingleUser from "./components/users/SingleUser";
import About from './components/pages/About';
import NotFound from "./components/pages/NotFound";
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
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" component={SingleUser} />
                <Route component={NotFound}/>
              </Switch>   
            </div>
          </div>
        </AlertState>
      </GithubState>
    );
}
export default App;
