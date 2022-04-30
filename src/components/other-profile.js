import React, {useEffect, useCallback} from "react"
import {useSelector, useDispatch} from "react-redux";

//import * as service from "../services/profiles-service.js"
import NavBar from "./navbar.js"
import {Link} from "react-router-dom"
import {findAllReviews} from "../actions/review-actions.js"
import {findAllFavorites} from "../actions/favorite-actions.js"
import {createFollowing} from "../actions/following-actions.js"

const OtherProfile = () => {


    const state = useSelector((state) => {

      return state
    });
    console.log("logging state in profile component");
    console.log(state);

    let profile = state.profileReducer.otherProfile;
    let reviewObj = state.reviewReducer;
    let favoriteObj = state.favoriteReducer;
    let dispatch = useDispatch();
    useEffect(() => {findAllReviews(dispatch, profile._id)}, [dispatch, profile._id])
    useEffect(() => {findAllFavorites(dispatch, profile._id)}, [dispatch, profile._id])
    const follow = useCallback(() => {
      createFollowing(dispatch, {followingId: profile._id, followerId: state.profileReducer._id, follower: state.profileReducer.username, following: profile.username})
    }, [dispatch, {}]);

    let key = 0;

    return (<div>
      <NavBar />
      <div className="m-5">
      <h1>Profile Page</h1>

       <img src={profile.imageUrl} width="20%" alt="" />

       <h3 className="text-white">{profile.username}</h3>

       <p className="text-white">{profile.bio}</p>


       <h3>Reviews </h3>
{reviewObj.reviews.map((rev) => {
          key += 1;
          return (<div>
          <h5 className="text-white">{rev.title} - {rev.text}</h5>
       </div>)
       })}

       <h3>Favorites</h3>
       {favoriteObj.favorites.map((favorite) => {
                 return (<h5 className="text-white">{favorite.title}</h5>)
              })}

      <button className="btn btn-primary" onClick={follow} >Follow</button>
      </div>

    </div>)
}

export default OtherProfile
