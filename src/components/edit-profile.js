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



    let profile = state.profileReducer;
    let reviewObj = state.reviewReducer;
    let dispatch = useDispatch();
    useEffect(() => {findAllReviews(dispatch, profile._id)}, [dispatch, profile._id]);

    const [srcText, setSrcText] = useState(profile.imageUrl);
    const [bioText, setText] = useState(profile.bio);
    const onChangeBioFunc = (event) => {

      setText(event.target.value);
      console.log(bioText);
    };

    const onChangeSRCFunc = (event) => {

          setSrcText(event.target.value);
          console.log(srcText);
    };

    const submitBio = useCallback((event) => {
      event.preventDefault();
      updateProfile(dispatch, {bio: bioText, _id: profile._id})
    }, [dispatch, {bio: bioText}]);

    const submitImage = useCallback((event) => {
      event.preventDefault();
      updateProfile(dispatch, {imageUrl: srcText, _id: profile._id})
    }, [dispatch, {imageUrl: srcText}])


    return (<div>
      <NavBar />
      <div className="m-5">
      <h1 className="display-1 text-white">Profile Page</h1>
       <img src={profile.imageUrl} alt="" width="20%"/>
       <form onSubmit={submitImage} className="text-white">
          <label>Update Profile Picture
            <input type="text" name="image" className="ms-3" size="100" value={srcText} onChange={onChangeSRCFunc}/>
          </label>
          <input className="btn btn-primary ms-3" type="submit" value="Update Image URL"/>
       </form>

       <h3 className="display-3 text-white">{profile.username}</h3>
       <h5 className="text-white">{profile.bio}</h5>
       <form onSubmit={submitBio} className="text-white">
           <label>Update Bio
            <input type="text" name="bio" className="ms-3" value={bioText} onChange={onChangeBioFunc}/>
           </label>
           <input className="btn btn-primary ms-3" type="submit" value="Update Bio"/>
         </form>
      </div>
    </div>)
}

export default EditProfile
