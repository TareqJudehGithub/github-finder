import React from 'react'
import Spinner from "../layout/Spinner";

class SingleUser extends React.Component {

     componentDidMount()  {
          this.props.getUser(this.props.match.params.login)  //.login from :/login from app.js
     }
     render() {
          //
          const {
               name, avatar, location, bio, blog, login, html_url,
               followers, following, public_repos, public_gists, hireable
          } = this.props.user
          const { loading } = this.props;

          return (
               <div>
                 {
                      loading ? <Spinner /> : name
                 }
               </div>
          )
     }
}
export default SingleUser;
