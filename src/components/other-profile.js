import React, {useEffect, useCallback} from "react"
import {useSelector, useDispatch} from "react-redux";

//import * as service from "../services/profiles-service.js"
import NavBar from "./navbar.js"
import {Link} from "react-router-dom"
import {findAllReviews} from "../actions/review-actions.js"
import {findAllFavorites} from "../actions/favorite-actions.js"
import {createFollowing} from "../actions/following-actions.js"
import {setEditingOther} from "../actions/profile-actions.js"
import {getMovie, getMoviePosters} from "../actions/movie-actions.js"

const OtherProfile = () => {


    const state = useSelector((state) => {

      return state
    });


    let profile = state.profileReducer.otherProfile;
    let reviewObj = state.reviewReducer;
    let favoriteObj = state.favoriteReducer;
    let followingObj = state.followingReducer;
    let dispatch = useDispatch();
    useEffect(() => {findAllReviews(dispatch, profile._id)}, [dispatch, profile._id])
    useEffect(() => {findAllFavorites(dispatch, profile._id)}, [dispatch, profile._id])
    const follow = useCallback(() => {
      createFollowing(dispatch, {followingId: profile._id, followerId: state.profileReducer._id, follower: state.profileReducer.username, following: profile.username})
    }, [dispatch, profile._id, profile.username, state.profileReducer._id, state.profileReducer.username]);

    let key = 0;
    let index = -1;

    const isFollowed = () => {return followingObj.following.map((obj) => obj.followingId).includes(profile._id)};
    const setEditing = useCallback(() => {
        if(!state.profileReducer.editingOther){
          setEditingOther(dispatch);
        }
      }, [dispatch, state.profileReducer.editingOther]
    );

    let movieFunc = useCallback((movieId) => {getMovie(dispatch, movieId)}, [dispatch])

        useEffect(() => {
          getMoviePosters(dispatch, reviewObj.reviews);
        },[dispatch, reviewObj.reviews, profile._id]);

    let {posters} = state.movieReducer;

    return (<div>
      <NavBar />
      <div className="m-5">

       <img src={profile.imageUrl} width="20%" alt="" />

       <h3 className="text-white">{profile.username}</h3>
       {(state.profileReducer.admin && !profile.admin) ? (
       <div>
           <Link to="/edit-profile">
            <button className="btn btn-primary" onClick={setEditing}>Edit Profile (Admin Privilege)</button>
           </Link>
       </div>) : <div>Cant Edit This Profile</div>
        }
       <p className="text-white">{profile.bio}</p>


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

       <h3 className="text-white">Favorites</h3>
       {favoriteObj.favorites.map((favorite) => {
                  key += 1;
                 return (<h5 className="text-white" key={key}>{favorite.title}</h5>)
              })}

      {!isFollowed() && state.profileReducer.username ? <button className="btn btn-primary mt-4" onClick={follow}>Follow</button> :  ""}
      </div>

      {<div className="m-5 text-white">
          <h2>Admin-Only Info</h2>
          <h3>
             Email: {profile.email}
          </h3>
          <h3>
            Phone: {profile.phone}
          </h3>
      </div>}

    </div>)
}

export default OtherProfile
