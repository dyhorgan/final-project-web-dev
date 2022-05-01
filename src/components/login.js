import React, {useState, useCallback} from "react";
import {BrowserRouter as router, Link} from "react-router-dom";
import NavBar from "./navbar.js"
import {findProfile, createProfile} from "../actions/profile-actions.js"
import {useSelector, useDispatch} from "react-redux";




const Login = () => {

  let dispatch = useDispatch();
  const state = useSelector((state) => {
        return state.profileReducer
      });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updatePassword = (event) => {
    setPassword(event.target.value);
  }

  const updateUsername = (event) => {
     setUsername(event.target.value);
  }

  const loginFunc = useCallback(() => {
      findProfile(dispatch, {username, password})
  },[dispatch, {username, password}])
  const signUpFunc = useCallback(() => {createProfile(dispatch, {username, password})},[dispatch, {username, password}])

  return(<div>
          <NavBar />
  <div className="loginBorder center loginMargin loginPadding container outlineText font-weight-bold">
            <div className="row">
              <div className="col-5"><div className="display-3">Username</div></div> <div className="col-3"><input size="40" name="username" onChange={updateUsername}/></div>
            </div>
            <div className="row">
              <div className="col-5"><div className="display-3 font-weight-bold">Password</div></div> <div className="col-3"><input size="40" name="password" onChange={updatePassword}/> </div>
            </div>
            <div className="row">
              <div className="col-5"/>
              <div className="col-3 ">
                <div className="submitPad">
                  <Link to="/profile">
                    <button className="submitStyling center" onClick={loginFunc}>Login</button>
                    <button className="submitStyling center" onClick={signUpFunc}>Signup</button>
                  </Link>
                </div>
              </div>
            </div>
         </div>

       </div>
  )

}

export default Login
