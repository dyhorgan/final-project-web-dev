import React, {useEffect, useCallback, useState} from "react"
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {findAllProfiles, setOtherProfile} from "../actions/profile-actions.js"

const PeopleToFollow = () => {

  const state = useSelector((state) => {

        return state.profileReducer
      });

  const dispatch = useDispatch();

  useEffect(() => {findAllProfiles(dispatch)},[dispatch]);
  let look = useCallback((profile)=>{setOtherProfile(dispatch, profile)}, [dispatch, {}]);
  let key = 0;
  return (<div>
    <h1 className="m-5">People Component</h1>
    <ul>
    {state.profiles.map((profile) => {
      key += 1;
      return (<Link to="/other-profile" key={key}>
        <li  onClick={() => look(profile)}>{profile.username}</li>
          </Link>
      )
    })}
    </ul>
    </div>
  )
}

export default PeopleToFollow
