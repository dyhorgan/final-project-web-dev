import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {findAllProfiles, newProfile} from "../actions/profile-actions.js"
import * as service from "../services/profiles-service.js"



const Profile = () => {


    const state = useSelector((state) => {
      console.log("logging state in selector")
      console.log(state);
      return state
    });

    const [newProfile, setNewProfile] = useState({
                                                      username: "Sample",
                                                      password: "guest",
                                                      imageURL: "https://www.mensjournal.com/wp-content/uploads/mf/daniel-craig-james-bond-gallery-casino-royale-main.jpg?quality=86&strip=all"
                                                  });
        const dispatch = useDispatch();

        useEffect(() => {findAllProfiles(dispatch)},[dispatch]);
//    let {imageURL, username} = profile[0];



    return (<div>
      <h1>Profile Page</h1>

       <div>

          <button>Edit Profile</button>
       </div>
       {state.map((element) => {return element.username})}



    </div>)
}

export default Profile
