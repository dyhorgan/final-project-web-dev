import React, {useCallback, useEffect, useState} from "react"
import NavBar from "./navbar.js"
import {useSelector, useDispatch} from "react-redux";
import {findAllReviews, findFriendReviews} from "../actions/review-actions.js"
import {findAllFavorites} from "../actions/favorite-actions.js"
import {findAllProfiles} from "../actions/profile-actions.js"
import {findAllFollowing} from "../actions/following-actions.js"

const Home = () => {
    let dispatch = useDispatch();

    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {findAllProfiles(dispatch)},[dispatch]);
    let profileInfo = state.profileReducer;

    useEffect(() => {findAllReviews(dispatch, profileInfo._id)}, [dispatch, profileInfo._id]);
    useEffect(() => {findAllFavorites(dispatch, profileInfo._id)}, [dispatch, profileInfo._id]);
    useEffect(() => {findAllFollowing(dispatch, profileInfo._id)}, [dispatch, profileInfo._id]);

    let reviewObj = state.reviewReducer;
    let favoriteObj = state.favoriteReducer;
    let followingObj = state.followingReducer;

    let following = followingObj.following;
    let friendArray = following.map((obj) => {return obj.followingId});

    useEffect(() => {

    findFriendReviews(dispatch, friendArray) },
    [dispatch, following]);


    let key = 0;

    let recentUsers = profileInfo.profiles.slice(-4).reverse();

    return (<div className="font-weight-bold">
        <NavBar />
        <div className="center outlineText">
        <h1 className="display-1 ">The Horror Movie Database</h1>
        <h2>{profileInfo.username ? "Welcome, " + profileInfo.username : ""}</h2>

          <div className="mt-5 whiteBack">
        {profileInfo.username ? (<div>
             <h1 className="font-weight-bold">Your Recent Reviews</h1>
             {reviewObj.reviews.map((rev) => {
               key += 1;
               return (<div key={key}>
                  <h5 className="text-white">{rev.title} - {rev.text}</h5>
               </div>)
               })}
               </div>) : ""}
        {profileInfo.username ? (<div>
        <h1 className="font-weight-bold">Your Recent Favorites</h1>
            {favoriteObj.favorites.map((favorite) => {
                    key += 1;
                  return (<h5 className="text-white" key={key}>{favorite.title}</h5>);
               })}
               </div>) : ""}
        {profileInfo.username ? ( <div>

        <h1 className="font-weight-bold">{"Your Friends" + "' " + "Recent Reviews"}</h1>

             {state.reviewReducer.friendReviews.map((element, index) => {
              key += 1;

              if(element){
                let name = following.find((friend) => {
                    if(friend.followingId === element.userId){
                      return friend.following;
                    }
                }).following;
                return <h3 key={key} className="text-white">{name + ": " + element.title + " - " + element.text}</h3>
              }
             }
             )}
        </div>) :""}

            <div className="mt-5">
              <h1 className="font-weight-bold">Users Who Recently Joined</h1>
              {recentUsers.map((user) => {
                      key += 1;
                    return <h5 key={key} className="text-white">{user.username}</h5>
                  }
                )
              }
            </div>
          </div>
        </div>
    </div>)
}

export default Home
