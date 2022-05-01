//import logo from './logo.svg';
import './App.css';
import Login from "./components/login.js"
import Home from "./components/home.js"
import Profile from "./components/profile.js"
import Search from "./components/search.js"
import EditProfile from "./components/edit-profile.js"
import MovieDetails from "./components/movie-details.js"
import Subgenre from "./components/subgenre.js"
import PeopleToFollow from "./components/people-to-follow.js"
import OtherProfile from "./components/other-profile.js"
import Friends from "./components/friends.js"

import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="/" exact={true} element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="details/:id" element={<MovieDetails />}/>
          <Route path="subgenre/" >
              <Route path="zombie" element={<Subgenre genre="zombie"/>} />
              <Route path="vampire" element={<Subgenre genre="vampire" />} />
              <Route path="werewolf" element={<Subgenre genre="werewolf" />} />
              <Route path="alien" element={<Subgenre genre="alien" />} />
              <Route path="monster" element={<Subgenre genre="monster" />} />
              <Route path="slasher" element={<Subgenre genre="slasher" />} />
              <Route path="psychological" element={<Subgenre genre="psychological" />} />
              <Route path="comedic" element={<Subgenre genre="comedic" />} />
              <Route path="paranormal" element={<Subgenre genre="paranormal" />} />
          </Route>
          <Route path="people-to-follow" element={<PeopleToFollow />} />
          <Route path="profile/:id" element={<OtherProfile />} />
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
