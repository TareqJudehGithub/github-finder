import React from 'react'
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner';
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
    
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


Users.prototype = {
     users: PropTypes.array.isRequired,
     loading: PropTypes.bool.isRequired
}

export default Users;
