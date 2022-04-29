import React, {useEffect, useCallback, useState} from "react"
import {useParams} from "react-router-dom"
import {getMovie} from "../actions/movie-actions.js"
import {createFavorite} from "../actions/favorite-actions.js"
import {createReview} from "../actions/review-actions.js"
import {useDispatch, useSelector} from "react-redux"

const MovieDetails = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {getMovie(dispatch, id)},[dispatch, id]);

  const state = useSelector((state) => {

          return state;
        });

  let {movie} = state.movieReducer;
  let movieId = movie.id;
  let {_id, username} = state.profileReducer;

  let userId = _id;


  let hours;
  let minutes;

  if(movie.runtime > 0){
        hours = Math.floor(movie.runtime / 60);
        minutes = movie.runtime % 60;
  }
  const [text, setText] = useState("");

  const submit = useCallback((event) => {
      event.preventDefault();
      let date = Date.now();
      createReview(dispatch, {text, movieId, userId, date})}, [dispatch, {text, movieId, userId, date: {}}]
      );
  const add = useCallback(() => {createFavorite(dispatch, {userId, movieId})}, [dispatch, {userId, movieId}]);

  const onChangeFunc = (event) => {setText(event.target.value)};

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
  { username.length > 0 ?
  <div>
  <form onSubmit={submit}>
    <label>Write Review
    <input type="text" name="review" onChange={onChangeFunc}/>
    </label>
    <input className="btn btn-primary" type="submit" value="submit"/>
  </form>

  <h4>Assign to Favorites</h4>
  <button type="button" className="btn btn-primary" onClick={add}>Add</button>
  </div> : <div />
  }

  </div>)
}

export default MovieDetails
