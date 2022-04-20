import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {findAllProfiles} from "../actions/profile-actions.js"
//import * as service from "../services/profiles-service.js"
import NavBar from "./navbar.js"



const Profile = () => {


    const state = useSelector((state) => {
      console.log("logging state in selector")
      console.log(state);
      return state
    });

//    const [newProfile, setNewProfile] = useState({
//                                                      username: "Sample",
//                                                      password: "guest",
//                                                      imageURL: "https://www.mensjournal.com/wp-content/uploads/mf/daniel-craig-james-bond-gallery-casino-royale-main.jpg?quality=86&strip=all"
//                                                  });
        const dispatch = useDispatch();

        useEffect(() => {findAllProfiles(dispatch)},[dispatch]);
//    let {imageURL, username} = profile[0];



    return (<div>
      <NavBar />
      <h1>Profile Page</h1>

       <div>

          <button>Edit Profile</button>
       </div>
       {state.map((element) => {return element.username})}

       <h3>Reviews </h3>

       <h3>Favorites</h3>



    </div>)
}

export default Profile
