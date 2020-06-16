import React from 'react';
import Search from "../users/Search";
import Users from "../users/Users";
import Alert from "../layout/Alert";

export const Home = () => {
     return (
          <React.Fragment>
               <Search />
               <Alert />
               <Users />
          </React.Fragment>
     )
}
export default Home;