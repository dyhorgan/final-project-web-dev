import React, {useEffect} from "react"
import {getMovies} from "../actions/movie-actions.js"
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom"

const Search = () => {
  const state = useSelector((state) => {

        return state.movieReducer;
      });

  let {query} = state;

  const dispatch = useDispatch();

  useEffect(() => {getMovies(dispatch, query)},[dispatch, query]);
  let key = 0;
  return (<div className="m-5">
  <h1>Search Component</h1>
    <ul>
    {state.movies.map((movie) => {
        key += 1;
        return (
        <li key={key}>
        <Link to={`/details/${movie.id}`}>
          {movie.original_title + " " + movie.release_date}
        </Link>
        </li>
        )
    })}
    </ul>
  </div>)
}

export default Search
