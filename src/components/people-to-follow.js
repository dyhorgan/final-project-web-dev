import React, {useEffect, useCallback} from "react"
import {Link, useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {findAllProfiles, setOtherProfile} from "../actions/profile-actions.js"
import NavBar from "./navbar.js"


const PeopleToFollow = () => {

  const location = useLocation();
  let path = location.pathname;

  const state = useSelector((state) => {

        return state;
      });

  const dispatch = useDispatch();

  useEffect(() => {findAllProfiles(dispatch)},[dispatch]);
  let look = useCallback((profile)=>{setOtherProfile(dispatch, profile)}, [dispatch]);
  let key = 0;
  let people = state.profileReducer.profiles;
  let followingObj = state.followingReducer;
  let friends = followingObj.following;
  let friendIds = friends.map((obj) => obj.followingId);
  let friendsBool = false;
  if(path === "/friends"){
    friendsBool = true;
  }
  if(friendsBool){
    people = people.filter((person) => friendIds.includes(person._id));
  }

  console.log(people);
  console.log(path);

  return (<div>
       <NavBar />
    <h1 className="m-5">People Component</h1>
    <div className="m-5">

    {people.map((profile) => {

          key += 1;

         return (<Link to={"/profile/" + profile._id} key={key} style={{textDecoration: 'none'}}>
                 <div className={"display-5 white"} onClick={() => look(profile)}>{profile.username}</div>
                   </Link>
               )
    })}
    </div>
    </div>
  )
}

export default PeopleToFollow
