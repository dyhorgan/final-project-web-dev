import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {getMovie} from "../actions/movie-actions.js"
import {useDispatch, useSelector} from "react-redux"

const MovieDetails = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {getMovie(dispatch, id)},[dispatch, id]);

  const state = useSelector((state) => {

          return state.movieReducer;
        });
  let {movie} = state;

  console.log(movie);

  let hours;
  let minutes;

  if(movie.runtime > 0){
        hours = Math.floor(movie.runtime / 60);
        minutes = movie.runtime % 60;
  }

  return(<div className="m-5">

  <h1>{movie.original_title}</h1>
  <h4>Release Date: {movie.release_date}</h4>
  <h4>Average Rating: {movie.vote_average}</h4>
  <h4>
  Runtime:
  {
    (movie.runtime > 0) ? (" " + hours + "hr" + minutes + "min"): " N/A"
  }
  </h4>

  </div>)
}

export default MovieDetails
