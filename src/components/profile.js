import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";

//import * as service from "../services/profiles-service.js"
import NavBar from "./navbar.js"
import {Link} from "react-router-dom"
import {findAllReviews} from "../actions/review-actions.js"
import {findAllFavorites} from "../actions/favorite-actions.js"
import {findAllFollowing} from "../actions/following-actions"

const Profile = () => {


    const state = useSelector((state) => {

      return state
    });

    let profile = state.profileReducer;
    let dispatch = useDispatch();
        useEffect(() => {findAllReviews(dispatch, profile._id)}, [dispatch, profile._id]);
        useEffect(() => {findAllFavorites(dispatch, profile._id)}, [dispatch, profile._id]);
        useEffect(() => {findAllFollowing(dispatch, profile._id)}, [dispatch, profile._id]);



    let reviewObj = state.reviewReducer;
    let favoriteObj = state.favoriteReducer;
    let followingObj = state.followingReducer;


    let key = 0;

    return (<div>
      <NavBar />
      <div className="m-5">
      <h1 className="display-1 text-white">Profile Page</h1>

       <div>
          <Link to="/edit-profile">
            <button>Edit Profile</button>
          </Link>
       </div>
       <img src={profile.imageUrl} width="20%" alt="" />

       <h3 className="display-3 text-white">{profile.username}</h3>

       <p className="display-5 text-white">{profile.bio}</p>


       <h3 className="text-white">Reviews </h3>
       {reviewObj.reviews.map((rev) => {
       key += 1;
       return (<div key={key}>
          <h5 className="text-white">{rev.title} - {rev.text}</h5>
       </div>)
       })}

       <h3 className="text-white">Favorites</h3>
       {favoriteObj.favorites.map((favorite) => {
            key += 1;
          return (<h5 className="text-white" key={key}>{favorite.title}</h5>)
       })}

       <h3 className="text-white">Following</h3>
       {followingObj.following.map((person) => {
       key += 1;
       return <div className="text-white" key={key}>{person.following}</div>})}

       <h3 className="text-white">Followers</h3>

       </div>

    </div>)
}

export default Profile
