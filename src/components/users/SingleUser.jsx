import React from 'react'
import Repos from "../Repos/Repos";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class SingleUser extends React.Component { 

     componentDidMount()  {
          this.props.getUser(this.props.match.params.login)  //.login is coming from :/login from app.js
          this.props.getUserRepos(this.props.match.params.login)
     }
     render() {
       
          const {
               name, avatar_url, location, bio, blog, login, html_url, company,
               followers, following, public_repos, public_gists, 
          } = this.props.user
          const { loading, repos } = this.props;
     
          return (
             
               <React.Fragment>
                 <Link to="/" className="btn btn-light">Back</Link>
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
                                        <a href={html_url} 
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
     static propTypes = {
          loading: PropTypes.bool.isRequired,
          user: PropTypes.object.isRequired,
          getUser: PropTypes.func.isRequired,
          repos: PropTypes.array.isRequired,
          getUserRepos: PropTypes.func.isRequired
     }
}

export default SingleUser;
