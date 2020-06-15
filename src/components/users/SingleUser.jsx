import React, { useEffect, useContext } from 'react';
import Repos from "../Repos/Repos";
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const SingleUser = ({ match }) => { 

     const githubContext = useContext(GithubContext);
     const { getUser, user, loading, repos, getUserRepos } = githubContext;

     useEffect(() => {
          getUser(match.params.login);
          getUserRepos(match.params.login);
          //to remove the useEffect() warning, include this commented line below:

          // eslint-disable-next-line  
     }, []);
          const {
               name, avatar_url, location, bio, blog, login, html_url, company,
               followers, following, public_repos, public_gists, 
          } = user
       
          return (
             
               <React.Fragment>
                 <Link to="/" className="btn btn-light">&#10094; Back</Link>
                    {
                         loading 
                         ? 
                         <Spinner /> 
                         : 
                         <div>
                              <div className="card grid-2">
                                   <div className="all-center">

                                        <img src={avatar_url} alt="avatar"
                                             className="round-img"
                                        style={{width: "150px"}}
                                        />

                                        <h2>{login}</h2> 
                                        
                                        <p>{location}</p>
                                   </div>
                                   <div>
                                        <p style={{margin:"0.5em 0"}}>
                                             <strong>Name: </strong> {name}
                                        </p>
                                        {
                                             bio
                                             && 
                                             <React.Fragment>
                                                  <strong>Bio</strong>
                                                  <p>{bio}</p>
                                             </React.Fragment>
                                        }                           
                                        <ul>
                                             <li>
                                                  {
                                                       login 
                                                       &&
                                                       <React.Fragment>
                                                            <strong>Username: </strong> {login}
                                                       </React.Fragment>
                                                  }
                                                  {
                                                       company 
                                                       &&
                                                       <React.Fragment>
                                                            <strong>Company: </strong> {company}
                                                       </React.Fragment>    
                                                  }
                                                  {
                                                       blog 
                                                       &&
                                                       <React.Fragment>
                                                            <strong>Website: </strong> {blog}
                                                       </React.Fragment>
                                                  }
                                             </li>
                                        </ul>
                                        <a href={html_url} target="_blank" rel="noopener noreferrer"
                                        className="btn btn-dark my-1"> {/* margin top&bottom*/}
                                        Profile
                                        </a>  
                                   </div>
                              </div>
                    
                              <div className="card text-center">
                                   <div className="badge badge-primary">
                                             Followers: {followers}
                                   </div>
                                   <div className="badge badge-success">
                                             Following: {following}
                                   </div>
                                   <div className="badge badge-light">
                                             Public Repos: {public_repos}
                                   </div>
                                   <div className="badge badge-dark">
                                             Public Gists: {public_gists}
                                   </div>
                              </div>
                         </div>
                    }
                    <Repos repos={repos}/>
               </React.Fragment>
          )
}

export default SingleUser;
