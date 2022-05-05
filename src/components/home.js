import React, {useEffect, useCallback, useMemo} from "react"
import NavBar from "./navbar.js"
import {useSelector, useDispatch} from "react-redux";
import {findAllReviews, findFriendReviews} from "../actions/review-actions.js"
import {findAllFavorites} from "../actions/favorite-actions.js"
import {findAllProfiles, setOtherProfile} from "../actions/profile-actions.js"
import {findAllFollowing} from "../actions/following-actions.js"
import {Link} from "react-router-dom"

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

    const friendArray = useMemo(() => {return following.map((obj) => {return obj.followingId}) }, [following]);
    useEffect(() => {

    findFriendReviews(dispatch, friendArray) },
    [dispatch, friendArray]);

    let look = useCallback((profile)=>{setOtherProfile(dispatch, profile)}, [dispatch]);

    let key = 0;

    let recentUsers = [];
    if(profileInfo.profiles){

      recentUsers = profileInfo.profiles.slice(-4).reverse();

    }

    return (<div className="font-weight-bold">
        <NavBar />
        <div className="center outlineText mb-5">
        <h1 className="display-1 ">The Horror Movie Database</h1>
        <h2>{profileInfo.username ? "Welcome, " + profileInfo.username : ""}</h2>
        <h3>Featured Films</h3>
        <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{position:"relative", left:"25%"}}>
              <Link to="/details/814" >
                <img className="d-block" src="https://image.tmdb.org/t/p/original/hN333m776qWYnbjTTcykwClYNgx.jpg" width="50%" alt="First slide"/>
              </Link>
            </div>
            <div className="carousel-item" style={{position:"relative", left:"25%"}}>
              <Link to="/details/1091" >
                <img className="d-block" src="https://image.tmdb.org/t/p/original//tzGY49kseSE9QAKk47uuDGwnSCu.jpg" width="50%" alt="Second slide"/>
              </Link>
            </div>
            <div className="carousel-item" style={{position:"relative", left:"25%"}}>
              <Link to="/details/310131" >
                <img className="d-block" src="https://image.tmdb.org/t/p/original//zap5hpFCWSvdWSuPGAQyjUv2wAC.jpg" width="50%" alt="Third slide"/>
              </Link>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <h1 className="sr-only">Previous</h1>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <h1 className="sr-only">Next</h1>
          </a>
        </div>
        </div>


          <div className="mt-5 whiteBack">
        {profileInfo.username ? (<div>
             <h1 className="font-weight-bold">Your Recent Reviews</h1>
             {reviewObj.reviews.map((rev) => {
               key += 1;
               return (<div key={key}>
                  <h3 className="text-white">{rev.title} - {rev.text}</h3>
               </div>)
               })}
               </div>) : ""}
        {profileInfo.username ? (<div>
        <h1 className="font-weight-bold">Your Recent Favorites</h1>
            {favoriteObj.favorites.map((favorite) => {
                    key += 1;
                  return (<h3 className="text-white" key={key}>{favorite.title}</h3>);
               })}
               </div>) : ""}
        {profileInfo.username ? ( <div>

        <h1 className="font-weight-bold">{"Your Friends' Recent Reviews"}</h1>

             {state.reviewReducer.friendReviews.map((element, index) => {
                key += 1;

                if(following && element){
                   let obj = following.find((friend) => {
                                    if(friend.followingId === element.userId){
                                      return friend.following;
                                    }else{return null}
                                  })
                   let name = "";
                   if(obj){
                    name = obj.following;
                   }
                   return <h3 key={key} className="text-white">{name + ": " + element.title + " - " + element.text}</h3>
                }else{
                  return "";
                }
             })}

        </div>) :""}

            <div className="mt-5">
              <h1 className="font-weight-bold">Other Users Who Recently Joined</h1>
              {recentUsers.map((user) => {
                      key += 1;
                    return (<div key={key}>
                    <Link to={"/profile/" + user._id} style={{textDecoration: 'none'}}>
                      <h3  className="text-white" onClick={() => look(user)}>{user.username}</h3>
                    </Link>
                    </div>)
                  }
                )
              }
            </div>
          </div>
        </div>
    </div>)
}

export default Home
