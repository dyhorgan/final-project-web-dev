import React, {useEffect, useCallback, useState} from "react"
import {useParams} from "react-router-dom"
import {getMovie, getOnePoster} from "../actions/movie-actions.js"
import {createFavorite} from "../actions/favorite-actions.js"
import {createReview, findAllReviewsByMovie} from "../actions/review-actions.js"
import {useDispatch, useSelector} from "react-redux"
import NavBar from "./navbar.js"

const MovieDetails = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {getMovie(dispatch, id)},[dispatch, id]);

  const state = useSelector((state) => {

          return state;
        });

  let {movie, poster} = state.movieReducer;
  console.log(state.movieReducer);
  let {title} = movie;
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
      createReview(dispatch, {text, movieId, userId, date, title, username})}, [dispatch, {text, movieId, userId, date: {}, title, username}]
      );
  const add = useCallback(() => {createFavorite(dispatch, {userId, movieId, title})}, [dispatch, {userId, movieId, title}]);

  const onChangeFunc = (event) => {setText(event.target.value)};
  useEffect(() => {getOnePoster(dispatch, movie.id)},[dispatch, movie.id]);
  useEffect(() => {findAllReviewsByMovie(dispatch, movie.id)}, [dispatch, movie.id]);

  console.log(state.reviewReducer);

  return(<div>
    <NavBar />
  <div className="m-5">

  <h1>{movie.original_title}</h1>
  {poster ? (
  <img src={"https://image.tmdb.org/t/p/original/" + poster} width="25%" alt=""/>
  )
  : ""
  }

  <h4 className="text-white">Release Date: {movie.release_date}</h4>
  <h4 className="text-white">Average Rating: {movie.vote_average}</h4>
  <h4 className="text-white">
  Runtime:
  {
    (movie.runtime > 0) ? (" " + hours + "hr" + minutes + "min"): " N/A"
  }
  </h4>
  { username ?
  <div>
  <form onSubmit={submit}>
    <label className="text-white me-1">
    Write Review  <input type="text" name="review" className="ms-3" onChange={onChangeFunc}/>
    </label>
    <input className="btn btn-primary" type="submit" value="submit"/>
  </form>

  <h4 className="text-white">Assign to Favorites</h4>
  <button type="button" className="btn btn-primary" onClick={add}>Add</button>
  </div> : ""
  }

  {state.reviewReducer.reviews.length ? (
      <div>
    <h5 className="text-white">Community Reviews</h5>
    {state.reviewReducer.reviews.map((rev) => {
      return <h6 className="text-white">{rev.username + " " + rev.text}</h6>
    })}
      </div>
    )
   : ""
  }

  </div>
  </div>)
}

export default MovieDetails
