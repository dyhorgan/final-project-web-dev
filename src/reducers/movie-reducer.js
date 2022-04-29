import {GET_MOVIES, SET_QUERY, GET_MOVIE, GET_MOVIES_ARRAY, GET_MOVIE_POSTERS} from "../actions/movie-actions.js"

const movieReducer = (state = {movies: [], posters: [], query: "", movie: {}}, action) => {

  switch(action.type){
    case GET_MOVIES:
      return {...state, movies: action.movies};
    case SET_QUERY:
      return {...state, query: action.query};
    case GET_MOVIE:
      return {...state, movie: action.movie};
    case GET_MOVIES_ARRAY:
      return {...state, movies: action.movies};
    case GET_MOVIE_POSTERS:
      return {...state, posters: action.posters};
    default: return(state);

  }
}

export default movieReducer
