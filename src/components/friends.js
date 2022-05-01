import React, {useEffect, useCallback} from "react"
import {findAllFollowing} from "../actions/following-actions.js"
import {useDispatch, useSelector} from "react-redux";
import {setOtherProfileById} from "../actions/profile-actions.js"
import {Link} from "react-router-dom"
import NavBar from "./navbar.js"

const Friends = () => {
  const state = useSelector((state) => {

        return state
      });
  const {followingReducer, profileReducer} = state;
  const dispatch = useDispatch();
  useEffect(() => {findAllFollowing(dispatch, profileReducer._id)}, [dispatch, profileReducer._id]);
  let look = useCallback((element)=>{setOtherProfileById(dispatch, element.followingId)}, [dispatch]);
  let key = 0;


  return ( <div>
    <NavBar />

  <div className="m-5">
  <h2>Following</h2>

                 {followingReducer.following.map((element) => {
                 key += 1;
                 return (<div key={key}>
                  <Link to={"/profile/" + element.followingId} style={{textDecoration: 'none'}}>
                 <div className="text-white h3" onClick={() => look(element)} key={key}>{element.following}</div>
                  </Link>
                 </div>
                 )})}
          </div>

          </div>);
}

export default Friends
