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
    console.log(profile);
    if(profile.editingOther){
      profile = profile.otherProfile;
    }

    let dispatch = useDispatch();
    useEffect(() => {findAllReviews(dispatch, profile._id)}, [dispatch, profile._id]);

    const [srcText, setSrcText] = useState(profile.imageUrl);
    const [bioText, setText] = useState(profile.bio);
    const [emailText, setEmail] = useState(profile.email);
    const [phoneText, setPhone] = useState(profile.phone);
    const onChangeBioFunc = (event) => {

      setText(event.target.value);
      console.log(bioText);
    };

     const onChangeEmailFunc = (event) => {

          setEmail(event.target.value);
          console.log(emailText);
        };

      const onChangePhoneFunc = (event) => {

           setPhone(event.target.value);
           console.log(phoneText);
         };

    const onChangeSRCFunc = (event) => {

          setSrcText(event.target.value);
          console.log(srcText);
    };

    const submitBio = useCallback((event) => {
      event.preventDefault();
      updateProfile(dispatch, {bio: bioText, _id: profile._id})
    }, [dispatch, bioText, profile._id]);

    const submitImage = useCallback((event) => {
      event.preventDefault();
      updateProfile(dispatch, {imageUrl: srcText, _id: profile._id})
    }, [dispatch, srcText, profile._id])

    const submitEmail = useCallback((event) => {
          event.preventDefault();
          updateProfile(dispatch, {email: emailText, _id: profile._id})
        }, [dispatch, emailText, profile._id])

    const submitPhone = useCallback((event) => {
          event.preventDefault();
          updateProfile(dispatch, {phone: phoneText, _id: profile._id})
        }, [dispatch, phoneText, profile._id])


    return (<div>
      <NavBar />
      <div className="m-5">
      <div>
      {state.profileReducer.editingOther ? (
          <Link to={"/profile/" + profile._id}>
              <button className="btn btn-primary">Finished</button>
          </Link>
      ) : (
      <Link to="/profile">
              <button className="btn btn-primary">Finished</button>
            </Link>
            )
      }

      </div>
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
       <h5 className="text-white">{profile.email}</h5>
              <form onSubmit={submitEmail} className="text-white">
                  <label>Update Email
                   <input type="text" name="email" className="ms-3" value={emailText} onChange={onChangeEmailFunc}/>
                  </label>
                  <input className="btn btn-primary ms-3" type="submit" value="Update Email"/>
              </form>
       <h5 className="text-white">{profile.phone}</h5>
                     <form onSubmit={submitPhone} className="text-white">
                         <label>Update Phone
                          <input type="text" name="phone" className="ms-3" value={phoneText} onChange={onChangePhoneFunc}/>
                         </label>
                         <input className="btn btn-primary ms-3" type="submit" value="Update Phone"/>
                     </form>
      </div>
    </div>)
}

export default EditProfile
