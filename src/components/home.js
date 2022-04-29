import React from "react"
import NavBar from "./navbar.js"
import {useSelector} from "react-redux";
const Home = () => {

    const state = useSelector((state) => {
        return state.profileReducer;
    });

    console.log(state);


    return (<div className="font-weight-bold">
        <NavBar />
        <div className="center outlineText">
        <h1 className="display-1 ">The Horror Movie Database</h1>
        <h2>{state.username ? "Welcome, " + state.username : ""}</h2>

          <div className="mt-5 whiteBack">
        {state.username ? <h1 className="font-weight-bold">Your Recent Reviews</h1>:""}
        {state.username ? <h1 className="font-weight-bold">Your Recent Favorites</h1>:""}
            <div className="mt-5">
              <h1 className="font-weight-bold">Users Who Recently Joined</h1>
              <h1 className="font-weight-bold">Reviews Recently Posted</h1>
            </div>
          </div>
        </div>
    </div>)
}

export default Home
