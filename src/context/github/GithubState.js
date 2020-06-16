import React, { useReducer } from "react";
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
     GET_USER,
     SEARCH_USERS,
     SET_LOADING,
     CLEAR_USERS,
     GET_REPOS,
} from "../types";

const GithubState = props => {
     const INITIAL_STATE = {
          users: [],
          user: {},
          repos: [],
          loading: false
     }
     
     const [state, dispatch] = useReducer(GithubReducer, INITIAL_STATE);
     const setLoading = () => dispatch({ type: SET_LOADING });

     //Search Github users:   //api.github/search/users?q={prop}
     const searchUsersHandler = async (text) => {  

          setLoading();
     
          const response = await axios
          .get(`https://api.github.com/search/users?q=${text}&client_id=
          ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
          ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
          );
          dispatch({
               type: SEARCH_USERS,
               
               payload: response.data.items //.items only for search results
          })
   };

   
  //Get single Github user:  //api.github/users/username
  const getUser = async (username) => {

     setLoading();
 
     const response = await axios
     .get(`https://api.github.com/users/${username}?client_id=
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
     );
     
     dispatch({
          type: GET_USER,
          payload: response.data //.data only for a user
     })
   };

    //get users repos:  //api.github.com/users/username/repos
     const getUserRepos = async (username) => {
          setLoading();
     
          const response = await axios
          .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
          ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
          ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
          );
     
          dispatch({
               type: GET_REPOS,
               payload: response.data
          })
   };

     //Clears Github users search result.
     const clearUsersHandler = () => dispatch({
          type: CLEAR_USERS
     })

     return <GithubContext.Provider
          value={{
               users: state.users,
               user: state.user,
               repos: state.repos,
               loading: state.loading,
               searchUsersHandler,
               clearUsersHandler,
               getUser,
               getUserRepos
          }}
     >
          {props.children}
     </GithubContext.Provider>
};

export default GithubState;