//import logo from './logo.svg';
import './App.css';
import Login from "./components/login.js"
import Home from "./components/home.js"
import Profile from "./components/profile.js"
import Search from "./components/search.js"
import EditProfile from "./components/edit-profile.js"
import MovieDetails from "./components/movie-details.js"

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
