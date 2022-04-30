import React, {useEffect} from "react"
import NavBar from "./navbar.js"
import {useSelector, useDispatch} from "react-redux";
import {findAllReviews} from "../actions/review-actions.js"
import {findAllFavorites} from "../actions/favorite-actions.js"
import {findAllProfiles} from "../actions/profile-actions.js"

const Home = () => {
    let dispatch = useDispatch();

    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {findAllProfiles(dispatch)},[dispatch]);
    let profileInfo = state.profileReducer;
    console.log(state);

    useEffect(() => {findAllReviews(dispatch, profileInfo._id)}, [dispatch, profileInfo._id]);
    useEffect(() => {findAllFavorites(dispatch, profileInfo._id)}, [dispatch, profileInfo._id]);


    let reviewObj = state.reviewReducer;
    let favoriteObj = state.favoriteReducer;

    let key = 0;

    let recentUsers = profileInfo.profiles.slice(-4);

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
        {profileInfo.username ? <h1 className="font-weight-bold">{"Your Friends" + "' " + "Recent Reviews"}</h1>:""}
        {profileInfo.username ? <h1 className="font-weight-bold">{"Your Friends" + "' " + "Recent Favorites"}</h1>:""}

            <div className="mt-5">
              <h1 className="font-weight-bold">Users Who Recently Joined</h1>
              {recentUsers.map((user) => <h5 className="text-white">{user.username}</h5>)}
            </div>
          </div>
        </div>
    </div>)
}

export default Home
