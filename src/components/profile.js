import React, {useEffect, useCallback} from "react"
import {useSelector, useDispatch} from "react-redux";

//import * as service from "../services/profiles-service.js"
import NavBar from "./navbar.js"
import {Link} from "react-router-dom"
import {findAllReviews} from "../actions/review-actions.js"
import {findAllFavorites} from "../actions/favorite-actions.js"
import {findAllFollowing, findAllFollowers} from "../actions/following-actions.js"
import {getMoviePosters, getMovie} from "../actions/movie-actions.js"
//import {setOtherProfile} from "../actions/profile-actions.js"

const Profile = () => {

    const state = useSelector((state) => {

      return state
    });

    let profile = state.profileReducer;
    let dispatch = useDispatch();


        useEffect(() => {findAllReviews(dispatch, profile._id)}, [dispatch, profile._id, profile.username]);
        useEffect(() => {findAllFavorites(dispatch, profile._id)}, [dispatch, profile._id, profile.username]);
        useEffect(() => {findAllFollowing(dispatch, profile._id)}, [dispatch, profile._id, profile.username]);
        useEffect(() => {findAllFollowers(dispatch, profile._id)}, [dispatch, profile._id, profile.username]);



    let reviewObj = state.reviewReducer;

    let favoriteObj = state.favoriteReducer;
    let followingObj = state.followingReducer;
    let movieObj = state.movieReducer;
    let movieFunc = useCallback((movieId) => {getMovie(dispatch, movieId)}, [dispatch])


    useEffect(() => {
      getMoviePosters(dispatch, reviewObj.reviews);
    },[dispatch, reviewObj.reviews, profile._id]);

    let {posters} = movieObj;

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

              <h3 className="display-3 text-white">{profile.username} {profile.admin ? " - Admin" : ""}</h3>
              <div className="blackBack bioMargin">
                <h3 className="text-white ms-2">Bio</h3>
                <p className="display-5 text-white ms-2">{profile.bio}</p>
              </div>

              <h4 className="text-white">{profile.email}</h4>
              <h4 className="text-white">{profile.phone}</h4>


              <h3 className="text-white">Reviews </h3>
              <div className="flexWrap">
              {reviewObj.reviews.map((rev) => {
              key += 1;
              index += 1;
              if(posters[index]){

              return (<div key={key} className="mb-3">
                 <Link to={"/details/" + rev.movieId}>
                  <img src={"https://image.tmdb.org/t/p/original" + posters[index]} onClick={() => movieFunc(rev.movieId)} alt="" width="300em"/>
                 </Link>
                 <div className="verticalCenter" style={{width: "18em"}}>
                    <h5 className="text-white ms-4">{rev.title} - {rev.text}</h5>
                 </div>
              </div>)
              }else{
                return <div key={key} />;
              }
              })}
              </div>
              <div className="mb-3">
              <h3 className="text-white">Favorites</h3>
              {favoriteObj.favorites.map((favorite) => {
                   key += 1;
                 return (<Link to={"/details/" + favorite.movieId} style={{textDecoration: 'none'}} key={key}>
                 <h5 className="text-white" onClick={() => movieFunc(favorite.movieId)}>{favorite.title}</h5>
                  </Link>
                 )
              })}
              </div>
              <h3 className="text-white">Following</h3>

              {followingObj.following.map((element) => {
                  key += 1;
                  return (<Link to={"/profile/" + element.followingId} key={key}>
                            <div className="text-white h6" key={key}>{element.following}</div>
                          </Link>)
                })
              }

              <h3 className="text-white">Followers</h3>

              {followingObj.followers.map((element) => {
                 key += 1;
                 return (<Link to={"/profile/" + element.followerId} key={key}>
                 <div className="text-white" key={key}>{element.follower}</div>
                    </Link>
                 )
              })}

              </div>

           </div>)
    }else{

      return(<div>
      <NavBar />
      <h1 className="m-5 text-white">Profile Not Found In DB</h1>
      </div>
      );
    }
}

export default Profile
