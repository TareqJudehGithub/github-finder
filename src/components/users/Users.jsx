import React from 'react'
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner';
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
    
          return (
               
               <div style={userStyle}>

                   {
                        loading
                        ?
                        <Spinner />
                        :
                        users
                        .slice(0, 6)
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

const userStyle = {
     display: "grid",
     gridTemplateColumns: "repeat(3, 1fr)",
     gridGap: "1rem"
}
Users.prototype = {
     users: PropTypes.array.isRequired,
     loading: PropTypes.bool.isRequired
}

export default Users;
