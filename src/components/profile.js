import React from "react"
import {useSelector} from "react-redux";

//import * as service from "../services/profiles-service.js"
import NavBar from "./navbar.js"
import {Link} from "react-router-dom"


const Profile = () => {


    const profile = useSelector((state) => {

      return state.profileReducer
    });



//    const [newProfile, setNewProfile] = useState({
//                                                      username: "Sample",
//                                                      password: "guest",
//                                                      imageURL: "https://www.mensjournal.com/wp-content/uploads/mf/daniel-craig-james-bond-gallery-casino-royale-main.jpg?quality=86&strip=all"
//                                                  });
//        const dispatch = useDispatch();

//        useEffect(() => {findProfile(dispatch, username, password)},[dispatch, username, password]);
//    let {imageURL, username} = profile[0];
    console.log("logging profile in profile.js");
    console.log(profile);


    return (<div>
      <NavBar />
      <div className="m-5">
      <h1>Profile Page</h1>

       <div>
          <Link to="/edit-profile">
            <button>Edit Profile</button>
          </Link>
       </div>
       <img src={profile.imageURL} alt=""></img>
       <h3>{profile.username}</h3>

       <p>{profile.bio}</p>


       <h3>Reviews </h3>

       <h3>Favorites</h3>

       <h3>Following</h3>

       <h3>Followers</h3>
       </div>



    </div>)
}

export default Profile
