import React, {useEffect, useState, useCallback} from "react"
import {useSelector, useDispatch} from "react-redux";

import NavBar from "./navbar.js"
import {Link} from "react-router-dom"
import {findAllReviews} from "../actions/review-actions"
import {updateProfile} from "../actions/profile-actions"


const EditProfile = () => {


    const state = useSelector((state) => {

      return state
    });

    const [bioText, setText] = useState("");

    let profile = state.profileReducer;
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
    const onChangeBioFunc = (event) => {

      setText(event.target.value);
      console.log(bioText);
    };

    const submitBio = useCallback((event) => {
      event.preventDefault();
      updateProfile(dispatch, {bio: bioText, _id: profile._id})
    }, [dispatch, {bio: bioText}]);


    return (<div>
      <NavBar />
      <div className="m-5">
      <h1>Profile Page</h1>

       <img src={profile.imageURL} alt=""></img>
       <h3>{profile.username}</h3>

       <form onSubmit={submitBio}>
           <label>Update Bio
           <input type="text" name="review" className="ms-3" value={profile.bio} onChange={onChangeBioFunc}/>
           </label>
           <input className="btn btn-primary ms-3" type="submit" value="Update Bio"/>
         </form>


       <h3>Reviews </h3>
       {reviewObj.reviews.map((rev) => {return <p>{rev.text}</p>})}

       <h3>Favorites</h3>

       <h3>Following</h3>

       <h3>Followers</h3>
       </div>



    </div>)
}

export default EditProfile
