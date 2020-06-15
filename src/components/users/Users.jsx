import React , { useContext }from 'react';
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner';
import GithubContext from "../../context/github/githubContext";

const Users = () => {
    
     const githubContext = useContext(GithubContext);
     const { users, loading } = githubContext;
          return (
               
               <div className="grid-4">
                   {
                        loading
                        ?
                        <Spinner />
                        :
                        users
                         .slice(0, 30)
                         .map(user => 
                              <UserItem 
                              key={user.id}
                              user={user}
                              />
                         )
                   } 
               </div>
          )
}

export default Users;
