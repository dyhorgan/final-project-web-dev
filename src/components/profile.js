import React, {useEffect, useCallback, useState} from "react"
import {useSelector, useDispatch} from "react-redux";

//import * as service from "../services/profiles-service.js"
import NavBar from "./navbar.js"
import {Link} from "react-router-dom"
import {findAllReviews} from "../actions/review-actions.js"
import {findAllFavorites} from "../actions/favorite-actions.js"
import {findAllFollowing, findAllFollowers} from "../actions/following-actions.js"
import {getMoviePosters} from "../actions/movie-actions.js"

const Profile = () => {

    const state = useSelector((state) => {

      return state
    });

    let profile = state.profileReducer;
    let dispatch = useDispatch();
    let [clicked, setClicked] = useState(false);

        useEffect(() => {findAllReviews(dispatch, profile._id)}, [dispatch, profile._id]);
        useEffect(() => {findAllFavorites(dispatch, profile._id)}, [dispatch, profile._id]);
        useEffect(() => {findAllFollowing(dispatch, profile._id)}, [dispatch, profile._id]);
        const getFollowing = () => {setClicked(true)};
        const getFollowers = useCallback(() => {findAllFollowers(dispatch, profile._id)}, [dispatch, state.followingReducer]);

    let reviewObj = state.reviewReducer;

    let favoriteObj = state.favoriteReducer;
    let followingObj = state.followingReducer;
    let movieObj = state.movieReducer;
    let {posters} = movieObj;
    let revIds = reviewObj.reviews.map((rev) => rev.movieId)
    useEffect(() => {getMoviePosters(dispatch, revIds)},[dispatch, reviewObj.reviews]);

    let key = 0;
    let index = -1;
    if(profile.username){
       return (<div>
             <NavBar />
             <div className="m-5">
             <h1 className="display-1 text-white">Profile Page</h1>

              <div>
                 <Link to="/edit-profile">
                   <button className="btn btn-primary">Edit Profile</button>
                 </Link>
              </div>
              <img src={profile.imageUrl} width="20%" alt="" />

              <h3 className="display-3 text-white">{profile.username}</h3>
              <div className="blackBack bioMargin">
                <h3 className="text-white ms-2">Bio</h3>
                <p className="display-5 text-white ms-2">{profile.bio}</p>
              </div>


              <h3 className="text-white">Reviews </h3>
              {reviewObj.reviews.map((rev) => {
              key += 1;
              index += 1;
              if(posters[index]){

              return (<div key={key} className="flexRow mb-3">
                 <Link to={"/details/" + rev.movieId}>
                  <img src={"https://image.tmdb.org/t/p/original" + posters[index]} alt="" width="300em"/>
                 </Link>
                 <div className="verticalCenter">
                    <h5 className="text-white ms-5">{rev.title} - {rev.text}</h5>
                 </div>
              </div>)
              }
              })}
              <div className="mb-3">
              <h3 className="text-white">Favorites</h3>
              {favoriteObj.favorites.map((favorite) => {
                   key += 1;
                 return (<h5 className="text-white" key={key}>{favorite.title}</h5>)
              })}
              </div>
              <h3 className="text-white">Following</h3>
              {!clicked ? <button className="btn btn-primary" onClick={getFollowing}>Get Following</button>: ""}
              {clicked ? followingObj.following.map((element) => {
              key += 1;
              return <div className="text-white" key={key}>{element.following}</div>}) : ""}

              <h3 className="text-white">Followers</h3>
              {followingObj.followers.length === 0 ? <button className="btn btn-primary" onClick={getFollowers}>Get Followers</button>: ""}
              {followingObj.followers.map((element) => {
                 key += 1;
                 return <div className="text-white" key={key}>{element.follower}</div>
              })}

              </div>

           </div>)
    }else{

      return(<div>
      <NavBar />
      <h1 className="m-5 text-white">Profile Not Found</h1>
      </div>
      );
    }
}

export default Profile
