import React, {useEffect, useCallback, useState} from "react"
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {findAllProfiles, setOtherProfile} from "../actions/profile-actions.js"
import NavBar from "./navbar.js"

const PeopleToFollow = () => {

  const state = useSelector((state) => {

        return state.profileReducer
      });

  const dispatch = useDispatch();

  useEffect(() => {findAllProfiles(dispatch)},[dispatch]);
  let look = useCallback((profile)=>{setOtherProfile(dispatch, profile)}, [dispatch, {}]);
  let key = 0;
  return (<div>
       <NavBar />
    <h1 className="m-5">People Component</h1>
    <div className="m-5">
    {state.profiles.map((profile) => {
      key += 1;
      return (<Link to="/other-profile" key={key} style={{textDecoration: 'none'}}>
        <div className={"display-5 white"} onClick={() => look(profile)}>{profile.username}</div>
          </Link>
      )
    })}
    </div>
    </div>
  )
}

export default PeopleToFollow
