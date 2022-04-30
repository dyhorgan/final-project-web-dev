import React, {useEffect} from "react"
import {getMovies} from "../actions/movie-actions.js"
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import NavBar from "./navbar.js"

const Search = () => {
  const state = useSelector((state) => {

        return state.movieReducer;
      });

  let {query} = state;

  const dispatch = useDispatch();

  useEffect(() => {getMovies(dispatch, query)},[dispatch, query]);
  let key = 0;
  return (<div>
    <NavBar/>
  <div className="m-5">
  <h1>Search Component</h1>
    <div className="blackBack">
    {state.movies.map((movie) => {
        key += 1;
        return (
        <div key={key} className="m-5 display-5 text-white white">
        <Link to={`/details/${movie.id}`} className="white" style={{textDecoration: 'none'}}>
          {movie.original_title + " " + movie.release_date}
        </Link>
        </div>
        )
    })}
    </div>
  </div>
  </div>)
}

export default Search
