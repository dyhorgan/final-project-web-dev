import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./navbar.js"

const Login = () => {

  return(<div>
          <NavBar />
  <div className="red loginBorder center loginMargin loginPadding container">
            <div className="row">
              <div className="col-5"><h4>Username</h4></div> <div className="col-3"><input size="40"/></div>
            </div>
            <div className="row">
              <div className="col-5"><h4>Login</h4></div> <div className="col-3"><input size="40" /> </div>
            </div>
            <div className="row">
              <div className="col-5"/>
              <div className="col-3 ">
                <div className="submitPad">
                <Link to="/profile">
                  <button className="submitStyling center">Login</button>
                  <button className="submitStyling center">Signup</button>
                </Link>
                </div>
              </div>
            </div>
         </div>

       </div>
  )

}

export default Login
