import React from 'react'
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const Repos = ({ repos }) => {

     return (
          <div  className="card">
               {
                    repos.map(repo =>
                         <RepoItem
                         key={repo.id}
                         repo={repo} />
                         )
               }
          </div>
     )
}
Repos.prototype = {
     repos: PropTypes.object.isRequired,
}
export default Repos;