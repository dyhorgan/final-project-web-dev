import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";

//import * as service from "../services/profiles-service.js"
import NavBar from "./navbar.js"
import {Link} from "react-router-dom"
import {findAllReviews} from "../actions/review-actions"


const OtherProfile = () => {


    const state = useSelector((state) => {

      return state
    });
    console.log("logging state in profile component");
    console.log(state);

    let profile = state.profileReducer.otherProfile;
    let reviewObj = state.reviewReducer;
    let dispatch = useDispatch();
    useEffect(() => {findAllReviews(dispatch, profile._id)}, [dispatch, profile._id])


//    const [newProfile, setNewProfile] = useState({
//                                                      username: "Sample",
//                                                      password: "guest",
//                                                      imageURL: "https://www.mensjournal.com/wp-content/uploads/mf/daniel-craig-james-bond-gallery-casino-royale-main.jpg?quality=86&strip=all"
//                                                  });
//        const dispatch = useDispatch();

//        useEffect(() => {findProfile(dispatch, username, password)},[dispatch, username, password]);
//    let {imageURL, username} = profile[0];


    return (<div>
      <NavBar />
      <div className="m-5">
      <h1>Profile Page</h1>

       <img src={profile.imageURL} alt=""></img>
       <h3>{profile.username}</h3>

       <p>{profile.bio}</p>


       <h3>Reviews </h3>
       {reviewObj.reviews.map((rev) => {return <p>{rev.text}</p>})}

       <h3>Favorites</h3>

       <h3>Following</h3>

       <h3>Followers</h3>
       </div>



    </div>)
}

export default OtherProfile
